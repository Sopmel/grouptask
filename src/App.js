import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return <div className="App">
    <Routes>
      <Route path="/"/>
      <Route path="/tasks"/>
      <Route path="/habits" />
      <Route path="/friends" />
    </Routes>
  </div>;
}

export default App;