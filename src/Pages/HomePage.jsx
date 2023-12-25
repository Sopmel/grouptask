import React from 'react'
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import FriendsList from '../Components/FriendsList';
import Style from "../Components/FriendsStyle.module.css"

function HomePage() {
  const [latestFriends, setLatestFriends] = useState([]);

  const location = useLocation();

  useEffect(() => {
    console.log(location.state)
    location.state && renderFiveFriends(location.state)
  }, [])

  const renderFiveFriends = (arr) => {
    let slicedArray = arr.slice(Math.max(arr.length - 5, 0))
    setLatestFriends(slicedArray)
  }

  return (
    <>
      <div className={Style.listsContainer}>
        <div className={Style.habitsDiv}>Habits</div>
        <div className={Style.taskDiv}>Tasks</div>
        <div className={Style.friendsDiv}>
          <FriendsList friends={latestFriends} />
          <Link to="/friends" >see Friends</Link>
        </div>
      </div>

    </>
  )
}

export default HomePage;