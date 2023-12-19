import React, { useState, useEffect } from "react";

const RandomTask = ({ onRandomTask }) => {
  const [random, setRandom] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
        let response = await fetch("https://www.boredapi.com/api/activity/");
        let json = await response.json();
        console.log(json);
        setRandom(json);
        onRandomTask(json); 
     
    };

    fetchTask();
  }, [onRandomTask]);
  console.log(random)

  return (
    <div style={{ backgroundColor: "#1c5456", color: "#ffffff", padding: "10px", marginTop: "10px" }}>
      <h3>Random Task</h3>
      {random && (
        <div>
          <p>Title: {random.activity}</p>
          <p>Category: </p>
          <p>Time: </p>
          <p>Catergory: {random.type}</p>
        </div>
      )}
    </div>
  );
};

export default RandomTask;