import React, { useState } from "react";

const RandomTask = ({ onRandomTask }) => {
  const [random, setRandom] = useState(null);

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