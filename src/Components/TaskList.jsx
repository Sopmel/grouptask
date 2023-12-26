
import React from "react";
import { useState } from "react";

const TaskList = ({ taskList, setTaskList }) => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortTimeOrder, setSortTimeOrder] = useState("low");
  return ( <>

  
    <div style={{margin: "10px", color: "white", display: "flex", justifyContent: "center", gap: "20px"}}>
        <p>Sortera:</p>

        <div style={{ display: "flex", justifyContent: "center" }}>
      <p>A-Ö</p>
      <input
        type="checkbox"
        checked={sortOrder === "desc"}
        onChange={() => {
          const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
          setSortOrder(newSortOrder);

          const sortedTaskList = [...taskList].sort((a, b) => {
            const titleA = (a.title || "").toUpperCase(); // Handle undefined title
            const titleB = (b.title || "").toUpperCase(); // Handle undefined title

            if (newSortOrder === "asc") {
              return titleA.localeCompare(titleB);
            } else {
              return titleB.localeCompare(titleA);
            }
          });

          setTaskList(sortedTaskList);
        }}
      />
    </div>

{/* sorterar på tid */}
<div style={{ display: "flex", justifyContent: "center" }}>
      <p style={{ marginRight: "10px" }}>Time: </p>
      <input
        type="checkbox"
        checked={sortTimeOrder === "high"}
        onChange={() => {
          const newSortTimeOrder = sortTimeOrder === "low" ? "high" : "low";
          setSortTimeOrder(newSortTimeOrder);

          const sortedTaskList = [...taskList].sort((a, b) => {
            const timeA = a.time || 0; // Handle undefined time
            const timeB = b.time || 0; // Handle undefined time

            if (newSortTimeOrder === "low") {
              return timeA - timeB;
            } else {
              return timeB - timeA;
            }
          });

          setTaskList(sortedTaskList);
        }}
      />

    </div>

      </div>

    </>
  );
};

export default TaskList;