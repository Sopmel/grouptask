// import style from "./FriendsStyle.module.css"
import { useDataContext } from "../DataContext";

const FilterFriends = ({ minAge, setMinAge,  maxAge, setMaxAge, gender, setGender }) => {

    const { friends } = useDataContext();

    const minAgeInArray = Math.min(...friends.map(user => user.age));
    const maxAgeInArray = Math.max(...friends.map(user => user.age))

    return (
        <div>
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
                Min Age:
                <input
                    type="number"
                    min={minAgeInArray}
                    max={maxAgeInArray}
                    value={minAge}
                    onChange={e => setMinAge(e.target.value)}
                />
            </label>

            <label>
                Max Age:
                <input
                    type="number"
                    min={minAgeInArray}
                    max={maxAgeInArray}
                    value={maxAge}
                    onChange={e => setMaxAge(e.target.value)}
                />
             </label>
        </div>
    )
}

export default FilterFriends