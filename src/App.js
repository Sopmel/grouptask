import "./App.css";
import { Routes, Route } from "react-router-dom";
import FriendsPage from "./Pages/FriendsPage";

function App() {
  return <div className="App">
    <Routes>
      <Route path="/" />
      <Route path="/tasks"/>
      <Route path="/habits" />
      <Route path="/friends" element={FriendsPage} />
    </Routes>
  </div>;
}

export default App;