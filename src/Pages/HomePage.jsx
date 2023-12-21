import React from 'react'
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import FriendsList from '../Components/FriendsList';

function HomePage() {
  const [latestFriends, setLatestFriends] = useState([]);
  const location = useLocation();

  useEffect(()=>{
    
    console.log(location.state)
    renderFiveFriends(location.state)
  }, [])

  const renderFiveFriends = (arr) => {
    let slicedArray = arr.slice(Math.max(arr.length - 5, 0))
    setLatestFriends(slicedArray)
  } 
  
  return (
    <>
      <div>HomePage</div>
      <FriendsList friends={latestFriends} />
      <Link to="/friends" state={renderFiveFriends} >
        see Friends
      </Link>
    </>
  )
}

export default HomePage;