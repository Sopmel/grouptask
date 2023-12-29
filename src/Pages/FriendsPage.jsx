import FilterFriends from "../Components/filterFriends"
import FriendsList from "../Components/FriendsList"
import SortFriends from "../Components/SortFriends"
import UseLocalStorage from "../Components/UseLocalStorage"
import { useState } from "react"
import { Link } from "react-router-dom"


const FriendsPage = ({friends, setFriends, fetchData, deleteFriend}) => {

    //filter conditions
    const [gender, setGender] = useState('')
    const [minAge, setMinAge] = useState('')
    const [maxAge, setMaxAge] = useState('');

    return (
        <>
            <div style={{padding: "15px"}}>
                <FilterFriends friends={friends} 
                    maxAge={maxAge} setMaxAge={setMaxAge}
                    minAge={minAge} setMinAge={setMinAge}
                    gender={gender} setGender={setGender}
                />
            
                <SortFriends friends={friends} setFriends={setFriends} /> 
            </div>

            <div>
              <FriendsList friends={friends} maxAge={maxAge}
                minAge={minAge} gender={gender} fetchData={fetchData}
                deleteFriend={deleteFriend} fromPage={"FriendsPage"}
            />
                       </div> 
            <button onClick={() => {
                fetchData("https://randomuser.me/api")
            }}
            >Add Friend</button>  
            <Link to="/" state={friends}>Home Page</Link>
        </>
    )
}

export default FriendsPage