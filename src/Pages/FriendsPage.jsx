import FilterFriends from "../Components/filterFriends"
import FriendsList from "../Components/FriendsList"
import SortFriends from "../Components/SortFriends"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useDataContext } from "../DataContext"


const FriendsPage = () => {

    const { friends, setFriends } = useDataContext();

    const [gender, setGender] = useState('')
    const [minAge, setMinAge] = useState('')
    const [maxAge, setMaxAge] = useState('')

    const fetchData = async (API) => {
        const response = await fetch(API);
        const json = await response.json();
        return json;
    };

    const addFriend = (data) => {
        setFriends([...friends,
            {
                firstName: `${data.results[0].name.first}`,
                lastName: `${data.results[0].name.last}`,
                img: `${data.results[0].picture.medium}`,
                email: `${data.results[0].email}`,
                dob: `${data.results[0].dob.date}`,
                age: `${data.results[0].dob.age}`,
                gender: `${data.results[0].gender}`,
                id: friends.length + 1,
            },
        ]);
    }

    return (
            <>
            <div style={{ padding: "15px" }}>
                <FilterFriends minAge={minAge} setMinAge={setMinAge} 
                maxAge={maxAge} setMaxAge={setMaxAge} 
                gender={gender} setGender={setGender}/>

                <SortFriends />
            </div>

            <FriendsList friends={friends} fromPage={"FriendsPage"} 
            minAge={minAge} maxAge={maxAge} gender={gender} />

            <button onClick={async() => addFriend(await fetchData("https://randomuser.me/api"))}
            >Add Friend</button>
            <Link to="/" state={friends}>Home Page</Link>
        </>
    )
}

export default FriendsPage