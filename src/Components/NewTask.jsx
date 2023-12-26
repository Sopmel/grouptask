import React, { useState } from "react";
import RandomTask from "./RandomTask";

const NewTask = (props) => {
  const { showForm, title, desc, time, category, handleChange, handleSave, setTitle, setCategory} = props;
  const [showRandomTask, setShowRandomTask] = useState(false);
  const [loadingRandomTask, setLoadingRandomTask] = useState(false);

  const handleRandomTask = async () => {
    setLoadingRandomTask(true);
  
    const response = await fetch('https://www.boredapi.com/api/activity/');
    
    if (response.ok) {
      const randomTask = await response.json();
      setTitle(randomTask.activity);
      
      setCategory(randomTask.type)
    } else {
      console.error(`Error! ${response.status}`);
    }
  
    setLoadingRandomTask(false);
    setShowRandomTask(false); 

    
  };

  const handleClose = () => {
    setTitle("");
    setCategory("");
  };

  return (
    showForm && (
      <form 
        style={{
          backgroundColor: "#1c5456",
          color: "#ffffff",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid #1c5456",
          marginTop: "10px"
        }}
      >
        <div style={{ display: "flex", marginBottom: "10px" }}>
          <label style={{ width: "100px" }}>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => handleChange(e, "title")}
            name="title"
          />
        </div>
        <div style={{ display: "flex", marginBottom: "10px" }}>
          <label style={{ width: "100px" }}>Description:</label>
          <textarea
            rows={3}
            value={desc}
            onChange={(e) => handleChange(e, "desc")}
            name="desc"
          ></textarea>
        </div>
        <div style={{ display: "flex", marginBottom: "10px" }}>
          <label style={{ width: "100px" }}>Time: </label>
          <select name="hours" id="hours" value={time} onChange={(e) => handleChange(e, "time")}
            >
      
              {Array.from({ length: 25 }, (_, index) => (
               <option key={index} value={`${index}`}>
                {index}
              hrs</option>
             ))}
           
          </select>
       </div>

       <div style={{ display: "flex", marginBottom: "10px" }}>
        <label style={{ width: "100px" }}>Category: </label>

        <select name="category" id="category" value={category} onChange={(e) => handleChange(e, "category")}>
          
            <option value={"social"}>social</option>
            <option value={"busywork"}>busywork</option>
            <option value={"education"}>education</option>
            <option value={"charity"}>charity</option>
            <option value={"recreational"}>recreational</option>
            <option value={"cooking"}>cooking</option>
            <option value={"relaxation"}>relaxation</option>
            <option value={"cleaning"}>cleaning</option>
            <option value={"music"}>music</option>
            <option value={"diy"}>diy</option>
            <option value={"undefined"}>undefined</option>
         
       </select>
       </div>
        <div style={{margin: "10px"}}>
          <button style={{marginRight: "20px", marginLeft: "20px"}} onClick={() => handleSave()}>Add</button>
          <button onClick={handleRandomTask} disabled={loadingRandomTask}>{loadingRandomTask ? 'Fetching...' : 'Random task'}</button>
          <button style={{marginRight: "20px", marginLeft: "20px"}} onClick={handleClose}>Close</button>
        </div>
        {showRandomTask && <RandomTask onRandomTask={handleRandomTask} />}
      </form>
    )
  );
};

export default NewTask;