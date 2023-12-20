import React, { useState, useEffect} from "react";
import TaskCard from "../Components/TaskCard";
import NewTask from "../Components/NewTask";
import TaskList from "../Components/TaskList";
import UseLocalStorage from "../Components/UseLocalStorage";

const TaskPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [time, setTime] = useState('');
  const [category, setCategory] = useState("undefined");
  const [filteredCategory, setFilteredCategory] = useState("all");
  const [edit, setEdit] = useState(null);
  const [taskList, setTaskList] = useState(() => {
    const storedTaskList = JSON.parse(localStorage.getItem("taskList"));
    return storedTaskList || [];
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === "title") {
      setTitle(value);
    } else if (name === "desc") {
      setDesc(value);
    } else if (name === "hours") {
      setTime(value);
    } else if (name === "category") {
      setCategory(value);
    }
  };

  const saveTask = (taskObj) => {
    if (edit !== null) {
      setTaskList((prevTaskList) => {
        const updatedTaskList = [...prevTaskList];
        updatedTaskList[edit] = taskObj; // Replace existing task
        localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
        return updatedTaskList;
      });
    
    setEdit(null);
  } else {
    setTaskList((prevTaskList) => {
      const updatedTaskList = [...prevTaskList, taskObj];
      localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
      return updatedTaskList;
      
    })
    
  }
  
  
  setTitle('');
  setDesc('');
  setTime('');
  setCategory('');
};


  const handleEdit = (index) => {
    const taskEdit = taskList[index];
    
  
//uppdatera
  setTitle(taskEdit.Title);
  setDesc(taskEdit.desc);
  setTime(taskEdit.time);
  setCategory(taskEdit.category);

  setEdit(index);
// visa form
  setShowForm(true);


} 
console.log(taskList)

const handleCategoryChange = (e) => {
  setFilteredCategory(e.target.value);
};


const handleSave = () => {
  const taskObj = {
    Title: title,
    desc: desc,
    time: time,
    category: category,
  };

  if (edit !== null) {
   
    saveTask(taskObj, edit);
  } else {
   
    saveTask(taskObj);
  }

  
  setTitle('');
  setDesc('');
  setTime('');
  setCategory(''); 
};
  

  const handleDelete = (index) => {
    setTaskList((prevTaskList) => {
      const updatedTaskList = [...prevTaskList];
      updatedTaskList.splice(index, 1);
      localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
      return updatedTaskList;
    });
  };

  return (
    <>
      <div
        style={{
          height: "auto",
          width: "100%",
          backgroundColor: "#ffffff",
          paddingTop: "20px",
          paddingBottom: "20px",
          marginTop: "10px",
          border: "1px solid #1c5456"
        }}
      >
        <h1>Tasks</h1>
        <button
          style={{
            backgroundColor: "#1c5456",
            padding: "10px",
            borderRadius: "10px",
            color: "#ffffff"
          }}
          onClick={() => setShowForm(!showForm)}
        >
          Create Task
        </button>

        <NewTask   
        showForm={showForm}
        setShowForm={setShowForm}
        handleSave={handleSave}
        handleChange={handleChange}
        title={title}
        desc={desc}
        time={time}
        category={category}
        setTitle={setTitle}
        setDesc={setDesc}
        setCategory={setCategory}
        setTime={setTime}
        />
       
      </div>

      <div style={{ backgroundColor: "#1c5456", padding: "10px" }}>
      
      <div style={{margin: "20px"}}>
      <h1 style={{ color: "#ffffff" }}>Task List</h1>
      <select onChange={handleCategoryChange} value={filteredCategory}>
            <option value="all">All</option>
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

        <TaskList taskList={taskList}
        filteredCategory={filteredCategory}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        setTaskList={setTaskList}
        
        />
    </div>
    </>
  );
};

export default TaskPage;