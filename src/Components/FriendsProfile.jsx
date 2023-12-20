import { useEffect, useState } from "react"

const FriendsProfile = ({ user }) => {
    const [imgClicked, setImgClicked] = useState(false)
    return (
        <>
            <div>
                <h3>{user.firstName} {user.lastName}</h3>
                <img src={user.img} alt="thumbnail" onClick={()=>{setImgClicked(!imgClicked)}} />
            </div>
            {
                imgClicked && 
                <div>
                    <p>Email: {user.email}</p>
                    <p>Date of Birth: {user.dob.slice(0,-14)}</p>
                    <p>Gender: {user.gender}</p>
                </div>
            }
        </>
    )
}

export default FriendsProfile