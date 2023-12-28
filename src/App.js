import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react"
import HabitsPage from "./Pages/HabitsPage";
import HomePage from "./Pages/HomePage";
import FriendsPage from "./Pages/FriendsPage";
import TaskPage from "./Pages/TasksPage";

function App() {

  const [friends, setFriends] = useState([])

  const fetchData = async (API) => {
    const response = await fetch(API)
    const json = await response.json()
    setFriends([...friends,
    {
      firstName: `${json.results[0].name.first}`,
      lastName: `${json.results[0].name.last}`,
      img: `${json.results[0].picture.medium}`,
      email: `${json.results[0].email}`,
      dob: `${json.results[0].dob.date}`,
      age: `${json.results[0].dob.age}`,
      gender: `${json.results[0].gender}`,
      id: friends.length + 1,
    },
    ])
  }

  const deleteFriend = (index) => {
    let newArr = [...friends]
    newArr.splice(index, 1)
    setFriends(newArr)
  }

  return (
    <div className="App">
      <div>
        <Link to="/habits">Habits</Link>
        <Link to="/task">Tasks</Link>
        <Link to="/friends">Friends</Link>
      </div>
      <Routes>
        <Route path="/" element={<HomePage friends={friends} />} />
        <Route path="/task" element={<TaskPage />} />
        <Route path="/habits" element={<HabitsPage />} />
        <Route path="/friends" element={<FriendsPage friends={friends} setFriends={setFriends} fetchData={fetchData} deleteFriend={deleteFriend}/>} />
      </Routes>
    </div>
  );
}

export default App;
