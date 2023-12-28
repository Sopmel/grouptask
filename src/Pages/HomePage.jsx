import React from 'react'
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import FriendsList from '../Components/FriendsList';
import TopHabits from '../Components/TopHabits';

function HomePage(props) {
  const [latestFriends, setLatestFriends] = useState([]);
  const [ topHabits, setTopHabits ] = useState([]);
 
  // const location = useLocation();
  // console.log(location.state);
  
   
  useEffect(()=>{
    // console.log(location.state)
    renderFiveFriends(props.friends)
  }, [])

  const renderFiveFriends = (arr) => {
    let sortedArray = [...arr].sort((a, b)=> { return a.id - b.id })
    let slicedArray = sortedArray.slice(Math.max(arr.length - 5, 0))
    setLatestFriends(slicedArray)
  } 

  // HABITS
  // useEffect(()=>{
    
  //   renderTopHabits(location.state)
  // }, [])

  // const renderTopHabits = (topH) => {
  //   console.log(topH);
  //   let slicedArrayH = topH.slice(Math.max(topH.length - 3, 0))
  //   setTopHabits(slicedArrayH);
  // } 
 

  return (
    <>
      <div style={{backgroundColor: "#1c5456", paddingBottom: "2rem"}}>HomePage
      <FriendsList friends={latestFriends} />
      <hr />
      {/* <h3 style={{color: "#ffffff"}}>Top 3 Habits</h3>
      <TopHabits habits={topHabits}/>
      <Link style={{color: "#ffffff"}} to="/habits" state={{habits: renderTopHabits}} >
        see all Habits
      </Link> */}
      </div>
    </>
  )
}

export default HomePage;