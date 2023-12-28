import React from 'react';
import { useState } from "react"

function NewHabit({ addNewHabit }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState();
  const [prio, setPrio] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "title") {
      setTitle(value);
    } else if
      (name === "date") {
      console.log(value);
      setDate(value);
    } else if
      (name === "prio") {
      setPrio(value);
    }
  }

  return (
    <div style={{
      display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"
    }}>
      <h2>New Habit</h2>
      <div style={{ display: "flex", gap: "0.5rem", flexDirection: "column", maxWidth: "30%" }}>
        <div style={{ display: "flex", marginBottom: "10px" }}>
          <label style={{ width: "100px" }}>Title:</label>
          <input type="text" value={title} name="title" onChange={(e) => { handleChange(e, "title") }} />
        </div>
        <div style={{ display: "flex", marginBottom: "10px" }}>
          <label style={{ width: "100px" }}>Streak:</label>
          <input type="number" value={date} name="date" onChange={(e) => handleChange(e, "date")} />
        </div>
        <div style={{ display: "flex", marginBottom: "10px" }}>
          <label style={{ width: "100px" }}>Prio:</label>
          <input type="number" value={prio} name="prio" onChange={(e) => handleChange(e, "prio")} />
        </div>
        <div>
          <button style={{
            backgroundColor: "#1c5456",
            padding: "10px",
            borderRadius: "10px",
            maxWidth: "60%",
            color: "#ffffff",
          }}

            onClick={() => { addNewHabit(title, date, prio)
              setTitle('');
              setDate('');
              setPrio('');
            }
            }
          >
            Create Habit</button>
        </div>
      </div>
    </div>
  )
}

export default NewHabit;