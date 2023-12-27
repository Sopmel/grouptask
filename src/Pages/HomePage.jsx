import React from 'react'
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import FriendsList from '../Components/FriendsList';
import TopHabits from '../Components/TopHabits';

function HomePage() {
  const [latestFriends, setLatestFriends] = useState([]);
  const [ topHabits, setTopHabits ] = useState([]);
 
  const location = useLocation();
  console.log(location.state);
   
  useEffect(()=>{
    console.log(location.state)
    renderFiveFriends(location.state)
  }, [])

  // useEffect(() => {
  //   // Check if 'friends' is available in location state
  //   if (location.state && location.state.friends) {
  //     renderFiveFriends(location.state.friends);
  //     console.log(location.state.friends);
  //   }
  
  //   // Check if 'habits' is available in location state
  //   if (location.state && location.state.habits) {
  //     renderTopHabits(location.state.habits);
  //   }
  // }, [location.state]);

  const renderFiveFriends = (arr) => {
    let slicedArray = arr.slice(Math.max(arr.length - 5, 0))
    setLatestFriends(slicedArray)
  } 

  // HABITS
  useEffect(()=>{
    
    renderTopHabits(location.state)
  }, [])

  const renderTopHabits = (topH) => {
    console.log(topH);
    let slicedArrayH = topH.slice(Math.max(topH.length - 3, 0))
    setTopHabits(slicedArrayH);
  } 
 

  return (
    <>
      <div style={{backgroundColor: "#1c5456", paddingTop: "2px", paddingBottom: "2rem"}}>
        <hr />
      <p className='underrubrik-text'>5 vänner</p>
      <FriendsList friends={latestFriends} />
      <Link className='link-style' to="/friends" state={{ friends: renderFiveFriends }} >
        see all Friends
      </Link>
      <hr />
      <p className='underrubrik-text'>Top 3 Habits</p>
      <TopHabits habits={topHabits}/>
      <Link className='link-style' to="/habits" state={{habits: renderTopHabits}} >
        see all Habits
      </Link>
      </div>
    </>
  )
}

export default HomePage;