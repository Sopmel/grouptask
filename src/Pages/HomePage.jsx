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
      <div style={{ backgroundColor: "#1c5456", paddingBottom: "2rem" }}>HomePage
        <FriendsList friends={latestFriends} fromPage={"HomePage"} />
        <hr />
        <h3 style={{ color: "#ffffff" }}>Top 3 Habits</h3>
        <TopHabits habits={topHabits} />
      </div>
    </>
  )
}

export default HomePage;