import MemberCard from "./MemberCard";
const TeamPage = ({members}) => {

    return(
      <>
        <h4>Our Team:{members.length} team members<p><i><small>MemberCard.jsx</small></i></p> </h4>
        <div style={{display: 'grid', gridTemplateColumns: "repeat(auto-fill,minmax(175px, 1fr))",gap:"10px"}}>
           {members.map( (member, index) =>(
            
            <MemberCard key={index} member = {member} />
           ))}
        </div>
        </>
    )

}

export default TeamPage;