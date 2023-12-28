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
            <h1 style={{ color: "#ffffff" }}>Habit List</h1>

            <div style={{ display: "flex", justifyContent: "center" }}>
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

// function OriginalHabitsPage() {
//     let [habitsList, setHabitsList] = useState([
//         {
//             title: "Diska varje kväll",
//             streaks: 3,
//             prioritet: 6
//         },
//         {
//             title: "Bädda sängen varje dag",
//             streaks: 7,
//             prioritet: 10

//         },
//         {
//             title: "Läsa en bok 30 minuter",
//             streaks: 5,
//             prioritet: 5

//         }]);


//     const [title, setTitle] = useState('');
//     const [date, setDate] = useState('');
//     const [prio, setPrio] = useState();
//     const [errorMessage, setErrorMessage] = useState('');
    // const [sortOrder, setSortOrder] = useState('asc');
//     const [prevHabitsList, setPrevHabitsList] = useState([]);


//     // vad gör denna? tror denna kan flyttas, vet ej var än
//     const handleChange = (e) => {
//         const { name, value } = e.target;

//         if (name === "title") {
//             setTitle(value);
//         } else if
//             (name === "date") {
//             console.log(value);
//             setDate(value);
//         } else if
//             (name === "prio") {
//             setPrio(value);
//         }
//     }

//     //-- vad gör .trim()===''?, denna kan nog flyttas till "new habit" komponenten
//     const saveHabit = () => {
//         if (title.trim() === '' || date.trim() === '' || prio.trim() === '') {
//             setErrorMessage('Du måste fylla i alla fält!');
//             return;
//         }

//         const habitObj = {
//             title: title,
//             streaks: date,
//             prioritet: prio,
//         };

// const sortedList = [...habitsList].sort((a, b) => {
//     const prioHigh = a.prioritet || 0;
//     const prioLow = b.prioritet || 0;
//     return sortOrder === 'asc' ? prioLow - prioHigh : prioHigh - prioLow;
// });

//         setPrevHabitsList([...habitsList]);

//         setHabitsList((prevHabitsList) => [...prevHabitsList, habitObj]);
//         setTitle('');
//         setDate('');
//         setPrio('');
//         setErrorMessage('');
//     };

//     const addStreak = (index) => {
//         const updatedHabitsList = [...habitsList];
//         updatedHabitsList[index].streaks = parseInt(updatedHabitsList[index].streaks, 10) + 1;
//         setHabitsList(updatedHabitsList);
//     };

//     const minusStreak = (index) => {
//         const updatedHabitsList = [...habitsList];
//         updatedHabitsList[index].streaks -= 1;
//         setHabitsList(updatedHabitsList);
//     };

//     const resetStreak = (index) => {
//         const updatedHabitsList = [...habitsList];
//         updatedHabitsList[index].streaks = 0;
//         setHabitsList(updatedHabitsList);
//     };

//     //väntar med sort
// useEffect(() => {
//     const sortList = () => {
//         setHabitsList((prevHabitsList) => {
//             const sortedList = [...prevHabitsList].sort((a, b) => {
//                 const prioHigh = (a.prioritet || 0);
//                 const prioLow = (b.prioritet || 0);
//                 return sortOrder === 'asc' ? prioLow - prioHigh : prioHigh - prioLow;
//             });
//             return sortedList;
//         });

//     };
//     sortList();
// }, [sortOrder, prevHabitsList]);

//     //vad gör denna?
//     const topPrio = ([...habitsList]);

//     return (
//         <div style={{ backgroundColor: "#1c5456", paddingBottom: "2rem" }}>
//             <div style={{ backgroundColor: "#ffffff", paddingBottom: "1rem" }}>
//                 <NewHabit
//                     title={title}
//                     date={date}
//                     prio={prio}
//                     handleChange={handleChange}
//                     saveHabit={saveHabit}
//                 />
//                 {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//             </div>

//             <h1 style={{ color: "#ffffff" }}>Habit List</h1>

//             {/* Sortering */}
// <div style={{ display: "flex", justifyContent: "center" }}>
//     <p style={{ color: "#ffffff" }}>Sortera prioritet: Hög-Låg</p>
//     <input type="checkbox" checked={sortOrder === "asc"} onChange={() => setSortOrder("asc")}
//     />
//     <p style={{ color: "#ffffff" }}>Låg-Hög</p>
//     <input type="checkbox" checked={sortOrder === "desc"} onChange={() => setSortOrder("desc")}

//     />
// </div>

//             {/* Lista + nya objekt/kort */}
//             <div style={{ backgroundColor: "#1c5456", display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center", alignItems: "center", margin: "0 1rem" }}>
//                 {habitsList.map((habit, index) => {
//                     return <div style={{ backgroundColor: "#ffffff", padding: "10px", borderRadius: "10px", width: "16%", margin: "0,5rem" }}
//                         key={index}>
//                         <p> Titel: {habit.title}</p>
//                         <hr />
//                         <p>Antal dagar i sträck: {habit.streaks}</p>
//                         <p>Prioritet: {habit.prioritet}</p>

//                         <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
//                             <button onClick={() => minusStreak(index)}>-</button>
//                             <button onClick={() => addStreak(index)}>+</button>
//                             <button onClick={() => resetStreak(index)}>Nollställ</button>
//                         </div>
//                     </div>
//                 })
//                 }</div>
//             <div>
//                 {/* <TopHabits topPrio={topPrio} /> */}
//                 <Link style={{ color: "#ffffff" }} to="/" state={topPrio}>Home Page</Link>

//             </div>
//         </div>

//     )
// }

export default HabitsPage;