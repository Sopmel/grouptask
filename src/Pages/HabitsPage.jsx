import React from 'react'
import NewHabit from '../Components/NewHabit';
import { useState, useEffect } from "react";
import TopHabits from '../Components/TopHabits';
import { Link } from "react-router-dom";

function HabitsPage({ habitsList, setHabitsList, addNewHabit, changeStreak, resetStreak }) {

    const sortHabits = (key) => {
        const sortedList = [...habitsList].sort((a, b) => {
            const prioHigh = (a.prioritet || 0);
            const prioLow = (b.prioritet || 0);
            const streaksHigh = (a.streaks || 0);
            const streaksLow = (b.streaks || 0);

            if (key === "Prio asc") {
                return prioLow - prioHigh
            } else if (key === "Prio desc") {
                return prioHigh - prioLow
            } else if (key === "Streak asc") {
                return streaksLow - streaksHigh
            } else if (key === "Streak desc") {
                return streaksHigh - streaksLow
            }
            
        })
        setHabitsList(sortedList)
    }

    return (
        <div style={{ backgroundColor: "#1c5456", paddingBottom: "2rem" }}>
            <div style={{ backgroundColor: "#ffffff", paddingBottom: "1rem" }}>
                <NewHabit addNewHabit={addNewHabit} />
            </div>
            <p className='underrubrik-text'>Habit List</p>

            <div style={{ display: "flex", justifyContent: "center", paddingBottom: "2rem" }}>
            <select name="sortingCriteria" id="sortingCriteria"
            onChange={e => sortHabits(e.target.value)}>
                <option value="Prio asc">Prioritet hög-låg</option>
                <option value="Prio desc">Prioritet låg-hög</option>
                <option value="Streak asc">Streak hög-låg</option>
                <option value="Streak desc">Streak låg-hög</option>
            </select>
            </div>

            <div style={{ backgroundColor: "#1c5456", display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center", alignItems: "center", margin: "0 1rem" }}>
                {habitsList.map((habit, index) => {
                    return (
                        <div style={{ backgroundColor: "#ffffff", padding: "10px", borderRadius: "10px", width: "16%", margin: "0,5rem" }}
                            key={index}>
                            <p> Titel: {habit.title}</p>
                            <hr />
                            <p>Antal dagar i sträck: {habit.streaks}</p>
                            <p>Prioritet: {habit.prioritet}</p>

                            <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
                                <button onClick={() => changeStreak(index, -1)}>-</button>
                                <button onClick={() => changeStreak(index, 1)}>+</button>
                                <button onClick={() => resetStreak(index)}>Nollställ</button>
                            </div>
                        </div>
                    )
                })
                }</div>
        </div>

    )
}

export default HabitsPage;