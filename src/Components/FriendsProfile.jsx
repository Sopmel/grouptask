import { useState } from "react"
import style from "./FriendsStyle.module.css"

const FriendsProfile = ({ user, index, deleteFriend }) => {
    const [imgClicked, setImgClicked] = useState(false)
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
                imgClicked &&
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