// import { useEffect, useState } from "react"

const FriendsProfile = ({ user }) => {
    return (
        <>
            <div>
                <h3>{user.name}</h3>
                <img src={user.img} alt="thumbnail" />
            </div>
        </>
    )
}

export default FriendsProfile