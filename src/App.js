import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { DataProvider } from "./DataContext"
import HabitsPage from "./Pages/HabitsPage";
import HomePage from "./Pages/HomePage";
import FriendsPage from "./Pages/FriendsPage";
import TaskPage from "./Pages/TasksPage";

function App() {

  return (

    <div className="App">

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#1c5456",
          flexDirection: "column",
          alignItems: "center",
          height: "150px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "2rem",
            // padding: "20px",
          }}
        >
          <Link className="header-text" to="/habits">Habits</Link>
          <hr />
          <Link className="header-text" to="/task">Tasks</Link>
          <hr />
          <Link className="header-text" to="/friends">Friends</Link>
          <hr />
          <Link className="header-text" to="/">Home</Link>
        </div>
      </div>
      <DataProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/task" element={<TaskPage />} />
          <Route path="/habits" element={<HabitsPage />} />
          <Route path="/friends" element={<FriendsPage />} />
        </Routes>
      </DataProvider>
    </div>

  );
}

export default App;
