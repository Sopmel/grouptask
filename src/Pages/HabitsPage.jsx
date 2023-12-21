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
    }



  return (
    <div>
        <NewHabit 
        title={title}
        date={date} 
        prio={prio}
        handleChange={handleChange}
        saveHabit={saveHabit}
        />


        <h2>Habitslist</h2>
        <div>{habitsList.map((habit, index) => {
            return <div key={index}>
                <h4> Titel: {habit.title}</h4>
                <h4>Antal dagar i sträck: {habit.streaks}</h4>
                <h4>Prioritet: {habit.prioritet}</h4>
                <button>-</button>
                <button>+</button>
                <button>Nollställ</button>
                </div>
        })
            }</div>
        </div>
  )
}

export default HabitsPage;