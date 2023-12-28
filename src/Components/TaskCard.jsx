

const TaskCard = ({ taskObj, index, onDelete, onEdit, onCheckboxChange, createdAt}) => {
  return (
    <div style={{ backgroundColor: taskObj.completed ? "#aafca1" : "#ffffff", padding: "10px", borderRadius: "10px", width: "20%" }}>
      <div style={{ display: "flex", gap: "0.5rem", marginLeft: "10px" }}>
        <input
          type="checkbox"
          checked={taskObj.completed}
          onChange={onCheckboxChange}
        />
        {taskObj.completed ? <p style={{ fontSize: "small", color: "#1c5456" }}>Completed!</p> : <p style={{ fontSize: "small", color: "#1c5456" }}>Not completed</p>}
      </div>

      <p>Title: {taskObj.title}</p>
      <hr />
      <p>Description: {taskObj.desc}</p>
      <p>Time: {taskObj.time} hrs</p>
      <p>Category: {taskObj.category}</p>
      

      <div style={{ display: "flex", gap: "1rem", marginLeft: "20px" }}>
        <button onClick={() => onEdit(index)}>Edit</button>
        <button onClick={() => onDelete(index)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;