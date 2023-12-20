import FriendsProfile from "./FriendsProfile"

const FriendsList = ({friends, maxAge, minAge, gender}) => {

    return (
        <>
            <p>{friends.length} Friends</p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                {friends
                    .filter(user => {
                        const maxAgeCondition = !maxAge || user.age <= parseInt(maxAge);
                        const minAgeCondition = !minAge || user.age >= parseInt(minAge);
                        const genderCondition = !gender || user.gender === gender;
                        return maxAgeCondition && minAgeCondition && genderCondition;
                    })
                    .map((user, index) => {
                        return (
                            <FriendsProfile key={index} user={user} />
                        )
                    })}
            </div>
        </>
    )
}

export default FriendsList