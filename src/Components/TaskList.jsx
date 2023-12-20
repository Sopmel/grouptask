
import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ taskList, filteredCategory, handleDelete, handleEdit, setTaskList }) => {
  return ( <>

  
    <div style={{margin: "10px", color: "white", display: "flex", justifyContent: "center", gap: "20px"}}>
        <p>Sortera:</p>

{/* Alphabetisk ordning */}
        <div style={{display: "flex", justifyContent: "center"}}>
          <p>A-Ö</p>
        <input type="checkbox"
        
        onClick={() => {
          const sortedTaskList = [...taskList].sort((a , b) => {
            const titleA = a.Title.toUpperCase();
            const titleB = b.Title.toUpperCase();
            if (titleA < titleB) {
              return -1;
            }
            if (titleA > titleB) {
              return 1;
            }
            return 0;
           
          });
          console.log(sortedTaskList)
      
         
          setTaskList(sortedTaskList);
          
        }}
        
        />
        </div>
{/* sorterar på tid */}
        <div style={{display: "flex", justifyContent: "center"}}>
          <p style={{marginRight: "10px"}}>time: </p> <p>Low</p>
        <input type="checkbox"
                onClick={() => {
                  const sortedTaskList = [...taskList].sort((a , b) => {
                    const timeA = a.time.toUpperCase();
                    const timeB = b.time.toUpperCase();
                    if (timeA < timeB) {
                      return -1;
                    }
                    if (timeA > timeB) {
                      return 1;
                    }
                    return 0;
                   
                  });
                  console.log(sortedTaskList)
              
                 
                  setTaskList(sortedTaskList);
                  
                }}
                
        />
        <p>High</p>
                <input type="checkbox"
                onClick={() => {
                  const sortedTaskList = [...taskList].sort((a , b) => {
                    const timeA = a.time.toUpperCase();
                    const timeB = b.time.toUpperCase();
                    if (timeB < timeA) {
                      return -1;
                    }
                    if (timeB > timeA) {
                      return 1;
                    }
                    return 0;
                   
                  });
                  console.log(sortedTaskList)
              
                 
                  setTaskList(sortedTaskList);
                  
                }}
        />
        </div>

      </div>
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      {taskList
    //   filtrerar på kategori
        .filter(task => filteredCategory === "all" || task.category === filteredCategory)
    // mappar igenom filtrerad array och renderar kort
        .map((obj, index) => (
          <TaskCard key={index} taskObj={obj} index={index} onDelete={handleDelete} onEdit={handleEdit} />
        ))}
    </div>
    </>
  );
};

export default TaskList;