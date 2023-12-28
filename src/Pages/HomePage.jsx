import React from 'react'
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import FriendsList from '../Components/FriendsList';
import TopHabits from '../Components/TopHabits';

function HomePage(props) {
  const [latestFriends, setLatestFriends] = useState([]);
  const [topHabits, setTopHabits] = useState([]);


  const renderFiveFriends = (arr) => {
    let sortedArray = [...arr].sort((a, b) => { return a.id - b.id })
    let slicedArray = sortedArray.slice(Math.max(arr.length - 5, 0))
    setLatestFriends(slicedArray)
  }

  useEffect(() => {
    renderFiveFriends(props.friends)
    renderTopHabits(props.habitsList)
  }, [])

  const renderTopHabits = (topH) => {
    let sortedArray = [...topH].sort((a, b) => { return a.prioritet - b.prioritet })
    let slicedArrayH = sortedArray.slice(Math.max(topH.length - 3, 0))
    setTopHabits(slicedArrayH);
  } 

  return (
    <>
      <div style={{ backgroundColor: "#1c5456", paddingTop: "2px", paddingBottom: "2rem" }}>
      <hr />
        <FriendsList friends={latestFriends} />
        <Link className='link-style' to="/friends">
        see all Friends
      </Link>
        <hr />
        <p className='underrubrik-text'>Top 3 Habits</p>
        <TopHabits habits={topHabits} />
        <Link className='link-style' to="/habits" >
        see all Habits
      </Link>
      </div>
    </>
  )
}

export default HomePage;