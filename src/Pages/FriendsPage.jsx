import FriendsProfile from "../Components/FriendsProfile"
import { useEffect, useState } from "react"

const FriendsPage = () => {
    const [friends, setFriends] = useState([])

    const addFriend = (user) => {
        setFriends([...friends,
        {
            name: `${user.results[0].name.title} ${user.results[0].name.first} ${user.results[0].name.last}`,
            img: `${user.results[0].picture.thumbnail}`,
            email: `${user.results[0].email}`,
            dateOfBirth: `${user.results[0].dob.date}`,
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

    useEffect(() => {
        fetchUserData()
    }, [])

    return (
        <div>
            <div>
                <h2>Friends:</h2>
                <h3>{friends.length} st</h3>
                {friends && friends.map((user) => {
                    return (
                        <FriendsProfile user={user} />
                    )
                })}
            </div>

            <button onClick={ () => { 
                fetchUserData() 
                console.log(friends)
            }}
            >Add Friend</button>
        </div>
    )
}

export default FriendsPage