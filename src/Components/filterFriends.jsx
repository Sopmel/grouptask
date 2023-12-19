import { useState } from "react"
import FriendsProfile from "./FriendsProfile"
import styling from "./FilterFriendsStyle.module.css"

const FilterFriends = ( props ) => {
    const [gender, setGender] = useState('')
    // const [filteredFriends, setFilteredFriends] = useState(friends)
    const {setFilteredFriends, friends} = props

    const minAgeInArray = Math.min(...friends.map(user => user.age));
    const maxAgeInArray = Math.max(...friends.map(user => user.age))
    const [maxAge, setMaxAge] = useState(maxAgeInArray.toString())
    const [minAge, setMinAge] = useState(minAgeInArray.toString())


    const handleFilter = () => {
        const filtered = friends.filter(user => {
            const maxAgeCondition = !maxAge || user.age <= parseInt(maxAge);
            const minAgeCondition = !minAge || user.age >= parseInt(minAge);
            const genderCondition = !gender || user.gender === gender;

            return maxAgeCondition && minAgeCondition && genderCondition;
        })
        setFilteredFriends(filtered)
    }

    return (
        <div>
            <div className="styling.filter">
                <p>filter:</p>
                <label>
                    Gender:
                    <select
                        value={gender}
                        onChange={e => setGender(e.target.value)} >
                        <option value="" >Alla</option>
                        <option value="male">Men</option>
                        <option value="female">Women</option>
                    </select>
                </label>

                <label>
                    Max Age:
                    <input
                        type="range"
                        min={minAgeInArray ? minAgeInArray : 0}
                        max={maxAgeInArray ? maxAgeInArray : 100}
                        value={maxAge}
                        onChange={e => setMaxAge(e.target.value)}
                        // e => setMaxAge(e.target.value)
                    />
                    {maxAge && <span>{maxAge}</span>}
                </label>

                <label>
                    Minimun Age:
                    <input
                        type="range"
                        min={minAgeInArray ? minAgeInArray : 0}
                        max={maxAgeInArray ? maxAgeInArray : 100}
                        value={minAge}
                        onChange={e => setMinAge(e.target.value)}
                    />
                    {minAge & <span>{minAge}</span>}
                </label>

                <button onClick={handleFilter}>
                    Apply filter
                </button>
            </div>

            {/* <div>
                <p>Filtered Friends</p>
                <div>
                    {filteredFriends.map((user, index) =>
                        <FriendsProfile user={user} key={index} />
                    )}
                </div>
            </div> */}
        </div>
    )
}

export default FilterFriends