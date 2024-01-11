import { createContext, useContext, useState } from "react";

//ArrayContext? AppContext? InfoContext? vad ska man ens kalla det?
const DataContext = createContext();

export function useDataContext() {
    return useContext(DataContext);
}

export function DataProvider({ children }) {
    //Huvudarrayerna
    const [taskList, setTaskList] = useState(() => {
        const storedTaskList = JSON.parse(localStorage.getItem("taskList"));
        return storedTaskList || [];
    });
    const [friends, setFriends] = useState([]);

    const [habitsList, setHabitsList] = useState([
        {
            title: "Diska varje kväll",
            streaks: 3,
            prioritet: 6,
        },
        {
            title: "Bädda sängen varje dag",
            streaks: 7,
            prioritet: 10,
        },
        {
            title: "Läsa en bok 30 minuter",
            streaks: 5,
            prioritet: 5,
        },
    ]);

    const contextValue = {
        taskList,
        setTaskList,
        friends,
        setFriends,
        habitsList,
        setHabitsList,
    }

    return <DataContext.Provider value={contextValue} >{children}</DataContext.Provider>

}

// export function FilterProvider ({children}) {
//     const [gender, setGender] = useState('')
//     const [minAge, setMinAge] = useState('')
//     const [maxAge, setMaxAge] = useState('')

//     const contextValue = {
//         gender,
//         setGender,
//         minAge,
//         setMinAge,
//         maxAge,
//         setMaxAge,
//     }

//     return <DataContext.Provider value={contextValue} >{children}</DataContext.Provider>
// }