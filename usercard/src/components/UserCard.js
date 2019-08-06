import React from 'react';

const UserCard = ({ userData }) => {
    console.log("userData from UserCard", userData)

    return (
        <div>
            <img src={userData.avatar_url} alt={userData.name} />
        </div>
    )
    
    
}

export default UserCard