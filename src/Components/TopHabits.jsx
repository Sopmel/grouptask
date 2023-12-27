import React, { useEffect, useState } from 'react'


function TopHabits( {habits} ) {

    return (
        <div style={{backgroundColor: "#1c5456", display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center", alignItems: "center", margin: "0 1rem"}}>
        {habits.map((habit, index) => (
          <div key={index} style={{backgroundColor: "#ffffff", padding: "10px", borderRadius: "10px", width: "16%", margin: "0,5rem"}}>
             <p>Title: {habit.title}</p>
            <p>Streaks: {habit.streaks}</p>
            <p>Prioritet: {habit.prioritet}</p>
          </div>
        ))}
        </div>
      );
    }
   

export default TopHabits;