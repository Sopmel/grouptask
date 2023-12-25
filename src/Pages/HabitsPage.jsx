import React from 'react'
import NewHabit from '../Components/NewHabit';
import { useState } from "react";

function HabitsPage() {
    let [habitsList, setHabitsList] = useState([
        { 
        title: "Diska varje kväll",
        streaks: 3,
        prioritet: 6
    }, 
    {
        title: "Bädda sängen varje dag",
        streaks: 7,
        prioritet: 10
        
    },
    {
        title: "Läsa en bok 30 minuter",
        streaks: 5,
        prioritet: 5
        
    }]);

    
    const [ newHabit, setNewHabit ] = useState();
    const [ title, setTitle ] = useState('');
    const [ date, setDate ] = useState('');
    const [ prio, setPrio ] = useState();
   

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

    const saveHabit = () => {
        const habitObj = {
            title: title, 
            streaks: date, 
            prioritet: prio,
        };
        setHabitsList([...habitsList, habitObj ]);
        setTitle('');
        setDate('');
        setPrio('');
    };

    const addStreak = (index) => {
        const updatedHabitsList = [...habitsList];
        updatedHabitsList[index].streaks += 1;
        setHabitsList(updatedHabitsList);
    };

    const minusStreak = (index) => {
        const updatedHabitsList = [...habitsList];
        updatedHabitsList[index].streaks -= 1;
        setHabitsList(updatedHabitsList);
    };

    const resetStreak = (index) => {
        const updatedHabitsList = [...habitsList];
        updatedHabitsList[index].streaks = 0;
        setHabitsList(updatedHabitsList);
      };



  return (
    <div style={{backgroundColor: "#1c5456", paddingBottom: "2rem"}}>
        <div style={{backgroundColor: "#ffffff", paddingBottom: "1rem"}}> 
        <NewHabit 
        title={title}
        date={date} 
        prio={prio}
        handleChange={handleChange}
        saveHabit={saveHabit}
        />
        </div>


        <h1 style={{color: "#ffffff"}}>Habit List</h1>
        <div style={{backgroundColor: "#1c5456", display: "flex", gap: "0.5rem" }}>
            {habitsList.map((habit, index) => {
            return <div style={{backgroundColor: "#ffffff", padding: "10px", borderRadius: "10px", width: "20%", margin: "0,5rem"}}
            key={index}>
                <p> Titel: {habit.title}</p>
                <hr />
                <p>Antal dagar i sträck: {habit.streaks}</p>
                <p>Prioritet: {habit.prioritet}</p>

                <div style={{display: "flex", gap: "0.5rem", justifyContent: "center"}}> 
                <button onClick={() => minusStreak(index)}>-</button>
                <button onClick={() => addStreak(index)}>+</button>
                <button onClick={() => resetStreak(index)}>Nollställ</button>
                </div>
                </div>
        })
            }</div>
        </div>
  )
}

export default HabitsPage;