const StarRating = ({rating, maxStars = 5}) =>{
    const validRating = Math.max(0, Math.min(maxStars, Math.round(rating)));

    const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2px',
    fontSize: '1.25rem',
    margin: '8px 0'
  };
  const filledStyle = {
    color: '#ffc107' // Gold color for filled stars
  };

  const emptyStyle = {
    color: '#e0e0e0' // Light grey for empty stars
  };
  // Generate an array of star elements based on maxStars
   const stars = Array.from({length : maxStars}, (_, index) => {
    const isFilled = index < validRating;

    return(
        <span key={index} 
        style={isFilled ? filledStyle : emptyStyle}>
            {isFilled ? '★' : '☆'}
        </span>
    )
   })

   return(
    <div style={containerStyle}>{stars}</div>
   )
}
export default StarRating;