import TeamPage from "./TeamPage";
const MemberCard = ({member}) => {
    const cardStyle = {
        border: '1px solid #e0e0e0',
        borderRadius: '12px',
        padding: '10px',
        maxWidth: '150px',
        maxHeight: '250px',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        fontFamily: 'system-ui, sans-serif',
        backgroundColor: '#f3e5e5'

    }
    const avatarStyle = {
        width: '76px',
        height: '76px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '2px'
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
        gap: '2px',
        fontWeight: 'bold',
        color: '#080808'

    }
    const {name, role, avatar, bio} = member;

    return(
        <div style={cardStyle}>
            <img src={avatar} alt={`${name}'s avatar`} style={avatarStyle} />
            <h3 style={nameStyle}>{name}</h3>
            <p style={titleStyle}>{role}</p>
            <p style={locationStyle}>{bio}</p>
        </div>
    )

}

export default MemberCard