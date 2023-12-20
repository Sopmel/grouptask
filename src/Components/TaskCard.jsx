import { useState } from "react";
import UseLocalStorage from "./UseLocalStorage";

const TaskCard = ({ taskObj, index, onDelete, onEdit}) => {
  const [taskComplete, setTaskComplete] = UseLocalStorage(
    `taskComplete_${index}`,
    false
  );
  
    
    const handleDelete = () => {
        onDelete(index);
    }

    const handleComplete = () => {
      setTaskComplete(!taskComplete);
    };

   

    return (
      <div style={{backgroundColor: taskComplete ? "#aafca1" : "#ffffff", padding: "10px", borderRadius: "10px", width: "20%"}}>
        
        <div style={{display: "flex", gap: "0.5rem", marginLeft: "10px"}}>
        <input 
        type="checkbox" 
        checked={taskComplete} 
        onChange={handleComplete} 
        />
        {taskComplete ? <p style={{fontSize: "small", color: "#1c5456"}}>Completed!</p> : <p style={{fontSize: "small", color: "#1c5456"}}>Not completed</p>}
        </div>

        <p>Title: {taskObj.Title}</p>
        <hr />
        <p>Description: {taskObj.desc}</p>
        <p>Time: {taskObj.time} hrs</p>
        <p>Category: {taskObj.category}</p>

        <div style={{display: "flex", gap: "1rem", marginLeft: "20px"}}>
        <button onClick={() => onEdit(index)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
        </div>

      </div>
    );
    
  };

  export default TaskCard;