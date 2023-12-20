import FilterFriends from "../Components/filterFriends"
import FriendsList from "../Components/FriendsList"
import SortFriends from "../Components/SortFriends"
import UseLocalStorage from "../Components/UseLocalStorage"
import { useEffect, useState } from "react"


const FriendsPage = () => {
    const [friends, setFriends] = useState([])
    const [gender, setGender] = useState('')
    const [minAge, setMinAge] = useState('')
    const [maxAge, setMaxAge] = useState('');


    const addFriend = (user) => {
        setFriends([...friends,
        {
            firstName: `${user.results[0].name.first}`,
            lastName: `${user.results[0].name.last}`,
            img: `${user.results[0].picture.thumbnail}`,
            email: `${user.results[0].email}`,
            dob: `${user.results[0].dob.date}`,
            age: `${user.results[0].dob.age}`,
            gender: `${user.results[0].gender}`,
            id: friends.length + 1,
        },
        ])
    }

    const fetchUserData = async () => {
        const response = await fetch("https://randomuser.me/api")
        const json = await response.json()
        addFriend(json)
    }

    return (
        <>
            <FilterFriends friends={friends}
                maxAge={maxAge} setMaxAge={setMaxAge}
                minAge={minAge} setMinAge={setMinAge}
                gender={gender} setGender={setGender} />

            <SortFriends friends={friends} setFriends={setFriends} />

            <FriendsList friends={friends} maxAge={maxAge} minAge={minAge} gender={gender} />

            <button onClick={() => {
                fetchUserData()
            }}
            >Add Friend</button>
        </>
    )
}

export default FriendsPage