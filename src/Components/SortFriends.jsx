// import style from "./FriendsStyle.module.css"
import { useDataContext } from "../DataContext"

const SortFriends = () => {
    const {friends, setFriends} = useDataContext();

    const sortFriends = (key) => {
        const sortedList = [...friends].sort((a, b) => {
            if (key === "firstName") {
                return a.firstName.localeCompare(b.firstName)
            } else if (key === "lastName") {
                return a.lastName.localeCompare(b.lastName)
            } else if (key === "age") {
                return a.age - b.age
            }
        })
        setFriends(sortedList)
    }

    return (
        <>
            <select name="sortingCriteria" id="sortingCriteria"
                onChange={e => sortFriends(e.target.value)}>
                <option value="firstName">Firstname A-Z</option>
                <option value="lastName">Lastname A-Z</option>
                <option value="age">Age</option>
            </select>
        </>
    )
}

export default SortFriends