import React from 'react'
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import FriendsList from '../Components/FriendsList';
import TopHabits from '../Components/TopHabits';
import TaskCard from '../Components/TaskCard';
import TopTasks from '../Components/TopTasks';

function HomePage() {
  const [latestFriends, setLatestFriends] = useState([]);
  const [ topHabits, setTopHabits ] = useState([]);
  const [latestTasks, setLatestTasks] = useState([]);
 

  const location = useLocation();
  console.log(location.state);
<<<<<<< HEAD
  
  useEffect(() => {
    if (location.state && location.state.taskList) {
      renderFiveLatestTasks(location.state.taskList);
    }
  }, [location.state]);
=======
>>>>>>> 7b7e546a42270baf3b67ea89874fff2b07840f96
   
  useEffect(()=>{
    if (location.state && location.state.FriendsList){
    renderFiveFriends(location.state.FriendsList)}
  }, [location.state]);

  const renderFiveLatestTasks = (tasks) => {
    let sortedTasks = [...tasks].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    let slicedTasks = sortedTasks.slice(0, 5);
    setLatestTasks(slicedTasks);
    console.log( latestTasks)
  };

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
    if(location.state && location.state.habits){
    renderTopHabits(location.state.habits)}
    
  }, [location.state])

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

      <p> Recently added Tasks</p>
      <Link to="/task" state={{ taskList: renderFiveLatestTasks }}>
          See All Tasks
        </Link>
      <TopTasks tasks={latestTasks} />

      
    </>
  )
}

export default HomePage;