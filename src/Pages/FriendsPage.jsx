import FriendsProfile from "../Components/FriendsProfile"
import FilterFriends from "../Components/filterFriends"
import { useEffect, useState } from "react"


const FriendsPage = () => {
    const [friends, setFriends] = useState([])
    const [filteredFriends, setFilteredFriends] = useState([])
    // const [filteredFriends, setFilteredFriends] = useState([])
    // const [usingFilter, setUsingFilter] = useState(false)

    const addFriend = (user) => {
        setFriends([...friends,
        {
            name: `${user.results[0].name.title} ${user.results[0].name.first} ${user.results[0].name.last}`,
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

    const addFilter = (data) => {
        setFilteredFriends(data)
    }

    useEffect(() => {
        fetchUserData()
    }, [])

    return (
        <div>
            <div>
                <div>
                    <FilterFriends friends={friends} setFilteredFriends={addFilter} />
                    {
                        filteredFriends && filteredFriends.map((user, index)=> {
                            return(
                                <FriendsProfile key={index} user={user}/>
                            )
                        })
                    }
                </div>

                <div>
                <h2>Friends:</h2>
                <h3>{friends.length} st</h3>
                    {friends && friends.map((user, index) => {
                    return (
                        <FriendsProfile key={index} user={user} />
                    )
                })}
                </div>
                
            </div>


            <button onClick={ () => { 
                fetchUserData() 
            }}
            >Add Friend</button>
        </div>
    )
}

export default FriendsPage