import React from 'react';

const FollowerCard = ({ followerData }) => {
    console.log("followerData from FollowerCard", followerData)

    return (
        <div className="followers">
            {followerData.map(follower => (
                <div className='followerCard'>
                    <img src={follower.avatar_url} alt={follower.name} />
                    <h2>{follower.login}</h2>
                    <h4>{follower.type}</h4>
                </div>
            ))}
        </div>
        
    )
    
    
}

export default FollowerCard