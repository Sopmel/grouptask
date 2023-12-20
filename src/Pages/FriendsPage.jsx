import FriendsProfile from "../Components/FriendsProfile"
import FilterFriends from "../Components/filterFriends"
import { useEffect, useState } from "react"


const FriendsPage = () => {
    const [friends, setFriends] = useState([])
    const [filteredFriends, setFilteredFriends] = useState([])

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

    const addFilter = (data) => {
        setFilteredFriends(data)
    }

    const sortFriends = (key, arr, setUseState) => {
        const sortedList = arr.sort((a, b)=> {
            if( key === "firstName"){
                return a.firstName.localeCompare(b.firstName)
            } else if(key === "lastname"){
                return a.lastName.localeCompare(b.lastName)
            } else if(key === "age"){
                return a.age - b.age
            }
        })
        setUseState(sortedList)
    }

    useEffect(() => {
        fetchUserData()
    }, [])

    return (
        <>
            <div>
                <select name="sortingCriteria" id="sortingCriteria" onChange={(e)=>{
                    filteredFriends.length === 0 ? sortFriends(e.target.value, friends, setFriends) : sortFriends(e.target.value, filteredFriends, setFilteredFriends)
                }} >
                    <option value="firstName">Firstname A-Z</option>
                    <option value="lastName">Lastname A-Z</option>
                    <option value="age">Age</option>
                </select>
            </div>

            <FilterFriends friends={friends} setFilteredFriends={addFilter} />

           {filteredFriends.length === 0 ? <div>
                <h2>Friends:</h2>
                <h3>{friends.length} st</h3>
                {friends && friends.map((user, index) => {
                    return (
                        <FriendsProfile key={index} user={user} />
                    )
                })}
            </div> : 
            <div>
                <p>Filtered Friends</p>
                {/* <FilterFriends friends={friends} setFilteredFriends={addFilter} /> */}
                {
                    filteredFriends && filteredFriends.map((user, index) => {
                        return (
                            <FriendsProfile key={index} user={user} />
                        )
                    })
                }
            </div>}

            <button onClick={() => {
                fetchUserData()
            }}
            >Add Friend</button>

        </>
    )
}

export default FriendsPage