import StarRating from "./StarRating";
import React from 'react';
const ProfileCard = ({ name, title, avatar, location, rating}) =>{

    const cardStyle = {
        border: '1px solid #e0e0e0',
        borderRadius: '12px',
        padding: '10px',
        maxWidth: '200px',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        fontFamily: 'system-ui, sans-serif',
        backgroundColor: '#fff'

    }
    const avatarStyle = {
        width: '76px',
        height: '76px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '10px'
    }
    const nameStyle  = {
        fontSize: '0.8rem',
        fontWeight: 'bold',
        margin: '0 0 2px 0',
        color: '#333'

    }
    const titleStyle = {
        fontSize: '.75rem',
        color: '#666',
        margin: '0 0 7px 0',
        
    }
    const locationStyle = {
        // backgroundColor: 'yellow',
        fontSize: '0.675rem',
        color: '#888',
        margin: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2px'

    }
   
    return(
        <div style={cardStyle}>
            <p><i><small>ProfileCard.jsx</small></i></p>
            <img src={avatar} alt={`${name}'s avatar`} style={avatarStyle} />
            <h2 style={nameStyle}>{name}</h2>
            <p style={titleStyle}>{title}</p>
            <StarRating rating={rating} />
            <p style={locationStyle}><span>📍</span>{location}</p>
        </div>
    )
}

export default ProfileCard