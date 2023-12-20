import styling from "./FilterFriendsStyle.module.css"

const FilterFriends = (props) => {

    const { friends, minAge, setMinAge, maxAge, setMaxAge, gender, setGender } = props

    //Varning något om att ett infinite värde inte kan användas? 
    const minAgeInArray = Math.min(...friends.map(user => user.age));
    const maxAgeInArray = Math.max(...friends.map(user => user.age))

    return (
        <>
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
                    type="number"
                    min={minAgeInArray}
                    max={maxAgeInArray}
                    value={maxAge}
                    onChange={e => setMaxAge(e.target.value)}
                />
            </label>

            <label>
                Minimun Age:
                <input
                    type="number"
                    min={minAgeInArray}
                    max={maxAgeInArray}
                    value={minAge}
                    onChange={e => setMinAge(e.target.value)}
                />
            </label>
        </>
    )
}

export default FilterFriends