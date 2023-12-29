import React, { useState} from "react";
import { Link, useLocation } from "react-router-dom";
import TaskCard from "../Components/TaskCard";
import CompleteTaskCard from "../Components/CompleteTaskCard";
import NewTask from "../Components/NewTask";
import TaskList from "../Components/TaskList";


const TaskPage = ({taskList, setTaskList}) => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [time, setTime] = useState('');
  const [category, setCategory] = useState("undefined");
  const [filteredCategory, setFilteredCategory] = useState("all");
  const [edit, setEdit] = useState(null);
  const [editedTask, setEditedTask] = useState(null);
  const [completedTasksList, setCompletedTasksList] = useState(() => {
    const storedCompletedTasksList = JSON.parse(localStorage.getItem("completedTasksList"));
    return storedCompletedTasksList || [];
  });

  const handleCheckboxChecked = (index) => {
    setTaskList((prevTaskList) => {
      const taskToMove = prevTaskList[index];
      const updatedTaskList = prevTaskList.filter((_, i) => i !== index);
  
      localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
  
      setCompletedTasksList((prevCompletedTasksList) => {
        //jämför listorna för att se om det finns kopior.
        if (!prevCompletedTasksList.some((task) => task.title === taskToMove.title)) {
          const updatedCompletedTasksList = [...prevCompletedTasksList, taskToMove];
          localStorage.setItem("completedTasksList", JSON.stringify(updatedCompletedTasksList));
          return updatedCompletedTasksList;
        }
  
        return prevCompletedTasksList;
      });
  
      return updatedTaskList;
    });
  };
  
  const handleCheckboxUnchecked = (index) => {
    setCompletedTasksList((prevCompletedTasksList) => {
      const taskToMoveBack = prevCompletedTasksList[index];
      const updatedCompletedTasksList = prevCompletedTasksList.filter((_, i) => i !== index);
  
      localStorage.setItem("completedTasksList", JSON.stringify(updatedCompletedTasksList));
  
      setTaskList((prevTaskList) => {
        if (!prevTaskList.some((task) => task.title === taskToMoveBack.title)) {
          const updatedTaskList = [...prevTaskList, taskToMoveBack];
          localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
          return updatedTaskList;
        }
  
        return prevTaskList;
      });
  
      return updatedCompletedTasksList;
    });
  };
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


const handleEdit = (index) => {
  const taskToEdit = taskList[index]

  if (taskToEdit) {
    const {title, desc, time, category } = taskToEdit;
    setTitle(title);
    setDesc(desc);
    setTime(time);
    setCategory(category);
    setEdit(index);
    setEditedTask(taskToEdit);
    setShowForm(true);
  }
}; 


const handleCategoryChange = (e) => {
  setFilteredCategory(e.target.value);
};


const handleSave = () => {
  const taskObj = {
    title,
    desc,
    time,
    category,
    completed: edit !== null ? taskList[edit].completed : false,
    createdAt: new Date(),
  };

  setTaskList((prevTaskList) => {
    const updatedTaskList = [...prevTaskList];

    if (edit !== null) {
      updatedTaskList[edit] = taskObj;
    } else {
      updatedTaskList.push(taskObj);
    }

    localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
    setTitle('');
    setDesc('');
    setTime('');
    setCategory('');
    setEdit(null);

    return updatedTaskList;
  });
};

  
const handleCompleteDelete = (index) => {
  setCompletedTasksList((prevCompletedTasksList) => {
    const updatedCompletedTasksList = [...prevCompletedTasksList];
    updatedCompletedTasksList.splice(index, 1);

    localStorage.setItem(
      "completedTasksList",
      JSON.stringify(updatedCompletedTasksList)
    );

    return updatedCompletedTasksList;
  });
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
          color: "#1c5456"
         
        }}
      >
        <h1>Tasks</h1>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "20px"}} >
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
        <div>
          <Link style={{ color: "white", textDecoration: "none", borderRadius: "10px", padding: "11px", backgroundColor: "#1c5456", fontSize: "small", border: "1px solid black"}} to="/" state={{ taskList }}>
           Go to Home Page
          </Link>
          </div>
          </div>

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
        <div style={{ margin: "20px" }}>
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
     
      <TaskList
          taskList={taskList}
          filteredCategory={filteredCategory}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          setTaskList={setTaskList}
          
        />

<div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {taskList
            .filter(
              (task) =>
                !task.completed &&
                (filteredCategory === "all" || task.category === filteredCategory)
            )
            .map((obj, index) => (
              <TaskCard
                key={index}
                taskObj={obj}
                index={index}
                onDelete={handleDelete}
                onEdit={() => handleEdit(index)}
                onCheckboxChange={() => handleCheckboxChecked(index)}
              />
            ))}
        </div>

        {completedTasksList.length > 0 && (
          <div style={{ backgroundColor: "#1c5456", padding: "10px", marginTop: "20px" }}>
            <h1 style={{ color: "#ffffff" }}>Completed Tasks</h1>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {completedTasksList.map((obj, index) => (
              <CompleteTaskCard
              key={index}
              taskObj={obj}
              index={index}
              onCompleteDelete={handleCompleteDelete}
              onCheckboxChange={() => handleCheckboxUnchecked(index)}
            />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TaskPage;