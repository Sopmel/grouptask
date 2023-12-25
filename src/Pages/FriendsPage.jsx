import FilterFriends from "../Components/filterFriends"
import FriendsList from "../Components/FriendsList"
import SortFriends from "../Components/SortFriends"
import UseLocalStorage from "../Components/UseLocalStorage"
import style from "../Components/FriendsStyle.module.css"
import { useState } from "react"
import { Link } from "react-router-dom"


const FriendsPage = () => {

    const [friends, setFriends] = useState([])
    //filter conditions
    const [gender, setGender] = useState('')
    const [minAge, setMinAge] = useState('')
    const [maxAge, setMaxAge] = useState('');

    const addRandomUser = (randomUser) => {
        setFriends([...friends,
        {
            firstName: `${randomUser.results[0].name.first}`,
            lastName: `${randomUser.results[0].name.last}`,
            img: `${randomUser.results[0].picture.medium}`,
            email: `${randomUser.results[0].email}`,
            dob: `${randomUser.results[0].dob.date}`,
            age: `${randomUser.results[0].dob.age}`,
            gender: `${randomUser.results[0].gender}`,
            id: friends.length + 1,
            message: "",
        },
        ])
    }

    const deleteFriend = (index) => {
        let newArr = [...friends]
        newArr.splice(index, 1)
        setFriends(newArr)
    }

    const fetchData = async (API) => {
        const response = await fetch(API)
        const json = await response.json()
        addRandomUser(json)
    }

    return (
        <>
            <div>
                <FilterFriends friends={friends}
                    maxAge={maxAge} setMaxAge={setMaxAge}
                    minAge={minAge} setMinAge={setMinAge}
                    gender={gender} setGender={setGender}
                />

                <SortFriends friends={friends} setFriends={setFriends} />
            </div>

            <FriendsList friends={friends} maxAge={maxAge}
                minAge={minAge} gender={gender}
                deleteFriend={deleteFriend}
            />

            <button onClick={() => {
                fetchData("https://randomuser.me/api")
            }}
            >Add Friend</button>
            <Link to="/" state={friends}>Home Page</Link>
        </>
    )
}

export default FriendsPage