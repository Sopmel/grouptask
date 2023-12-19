import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HabitsPage from "./Pages/HabitsPage";
import HomePage from "./Pages/HomePage";
import FriendsPage from "./Pages/FriendsPage";
<<<<<<< HEAD
=======
import TaskPage from "./Pages/TasksPage";
>>>>>>> 8ace09a8efacf2fabe405ac0e6d225801a4a9572

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/habits">Habits</Link>
        <Link to="/task">Tasks</Link>
        <Link to="/friends">Friends</Link>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/task" element={<TaskPage />} />
        <Route path="/habits" element={<HabitsPage />} />
        <Route path="/friends" element={<FriendsPage />} />
      </Routes>
    </div>
  );
}

export default App;
