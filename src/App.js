import "./App.css";
import { Routes, Route } from "react-router-dom";
import HabitsPage from "./Pages/HabitsPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" />
        <Route path="/habits" element={<HabitsPage />} />
        <Route path="/friends" />
      </Routes>
    </div>
  );
}

export default App;
