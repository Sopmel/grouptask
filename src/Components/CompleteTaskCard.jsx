import React from "react";

const CompleteTaskCard = ({ taskObj, index, onCompleteDelete, onCheckboxChange }) => {
    return (
        <div style={{ backgroundColor: "#aafca1", padding: "10px", borderRadius: "10px", width: "20%" }}>
        <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
          <input
            type="checkbox"
            checked
            onChange={onCheckboxChange} 
          />
          {<p style={{ fontSize: "small", color: "#1c5456" }}>Completed!</p>}
        </div>
  
        <p>Title: {taskObj.title}</p>
        <hr />
        <p>Description: {taskObj.desc}</p>
        <p>Time: {taskObj.time} hrs</p>
        <p>Category: {taskObj.category}</p>
  
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <button onClick={() => onCompleteDelete(index)}>Delete</button>
        </div>
      </div>
    )

}

export default CompleteTaskCard;