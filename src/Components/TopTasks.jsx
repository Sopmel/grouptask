const TopTasks = ({ tasks }) => {
    return (
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', backgroundColor: "#1c5456", padding: "10px"}}>
        {tasks.map((task, index) => (
              <div key={index} style={{ backgroundColor:"#ffffff", padding: "10px", borderRadius: "10px", width: "20%"}}>
        
              <p>Title: {task.title}</p>
              <hr />
              <p>Description: {task.desc}</p>
              <p>Time: {task.time} hrs</p>
              <p>Category: {task.category}</p>
            
            </div>
        ))}
      </div>
    );
  }
  
  export default TopTasks;