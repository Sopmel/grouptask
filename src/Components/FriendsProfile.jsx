import { useState } from "react"
import style from "./FriendsProfile.module.css"
import { useDataContext } from "../DataContext"

const FriendsProfile = ({ user, index, fromPage }) => {
    const { friends, setFriends } = useDataContext();
    const [imgClicked, setImgClicked] = useState(false)

    const deleteFriend = (index) => {
        let newArr = [...friends];
        newArr.splice(index, 1);
        setFriends(newArr);
    };

    return (
        <div className={style.friendCard}>
            <div className={style.mainCard}
            onClick={() => { setImgClicked(!imgClicked) }}>
                <img className={style.imgFriend} src={user.img} alt="thumbnail"
                />
                <hr />
                <h4>{user.firstName} {user.lastName}</h4>
            </div>
            {
                imgClicked && fromPage === "FriendsPage" &&
                <div className={style.infoContainer}>
                    <p>{user.email}</p>
                    <p>{user.dob.slice(0, -14)}</p>
                    <p>{user.gender}</p>
                    <button onClick={()=>{deleteFriend(index)}}>Delete Friend</button>
                </div>
            }
        </div>
    )
}

export default FriendsProfile