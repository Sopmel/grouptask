import FriendsProfile from "./FriendsProfile"
import style from "./FriendsStyle.module.css"

const FriendsList = ({friends, maxAge, minAge, gender, deleteFriend}) => {
    return (
        <div className={style.FriendsList}>
            <p>{friends.length} Friends</p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center"}}>
                {friends
                    .filter(user => {
                        const maxAgeCondition = !maxAge || user.age <= parseInt(maxAge);
                        const minAgeCondition = !minAge || user.age >= parseInt(minAge);
                        const genderCondition = !gender || user.gender === gender;
                        return maxAgeCondition && minAgeCondition && genderCondition;
                    })
                    .map((user, index) => {
                        return (
                            <FriendsProfile key={index} user={user} index={index} 
                                deleteFriend={deleteFriend}
                            />
                        )
                    })}
            </div>
        </div>
    )
}

export default FriendsList