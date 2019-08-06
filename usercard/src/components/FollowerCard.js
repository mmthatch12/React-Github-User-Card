import React from 'react';

const FollowerCard = ({ userData }) => {
    console.log("userData from UserCard", userData)

    return (
        <div className='userCard'>
            <img src={userData.avatar_url} alt={userData.name} />
            <h2>{userData.name}</h2>
            <h4>{userData.bio}</h4>
            <h4>{userData.location}</h4>
        </div>
    )
    
    
}

export default FollowerCard