import React from 'react';
import { useState } from "react";


function NewHabit({handleChange, saveHabit, title, date, prio}) {
    

  return (
    <div> 
    <h2>New Habit</h2>
    <input type="text" value={title} name="title" onChange={(e) => handleChange(e, "title")} /> 
    <input type="date" value={date} name="date" onChange={(e) => handleChange(e, "date")} />
    <input type="number" value={prio} name="prio" onChange={(e) => handleChange(e, "prio")} />
    <button onClick={() => saveHabit()}>Add</button>
    </div>
  )
}


export default NewHabit;