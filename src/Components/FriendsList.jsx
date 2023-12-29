import FriendsProfile from "./FriendsProfile"
import style from "./FriendsStyle.module.css"

const FriendsList = ({friends, maxAge, minAge, gender, deleteFriend, fromPage}) => {
    return (
        <div className={fromPage === "FriendsPage" ? style.FriendsList : style.HomePageList }>
            <p className='underrubrik-text'>{friends.length} Friends</p>
            <div className={style.FriendsProfileContainer}>
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
                                deleteFriend={deleteFriend} fromPage={fromPage}
                            />
                        )
                    })}
            </div>
        </div>
    )
}

export default FriendsList