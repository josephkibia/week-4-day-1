import StarRating from "./StarRating";



  const styles = {
        card: {
        maxWidth: '200px',
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        textAlign: "left",
        marginTop: "2px"
           },
        imageWrapper: {
        position: "relative",
        height: "100",
        backgroundColor: "red",
      },
        image: {
        width: "100%",
        height: "50%",
        objectFit: "cover",
        display: "block",
  },
    badge: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "rgba(0,0,0,0.75)",
        color: "#fff",
        padding: "6px 8px",
        borderRadius: 4,
        fontWeight: 700,
        fontSize: "0.9rem",
        letterSpacing: 1,
  },
    body: { padding: "3px" },
    name: { margin: "0 0 2px", fontSize: "0.6rem", color: "#222" },
    rating: { color: "#f5a623", marginBottom: "2px", fontSize: "0.55rem", letterSpacing: 2 },
    price: { fontWeight: "bold", fontSize: "0.55rem",color: "#111", marginBottom: 5 },
    button: {
    width: "100%",
    padding: "4px 0",
    border: "none",
    borderRadius: 4,
    fontSize: "0.55rem",
             },
    mainDiV:{
      dispay: 'flex',
      gap: '3px'
             }
    }

const ProductCard = ({image, name, price, rating, inStock}) => {
  

    const formatPrice = (amount) => `KES ${amount.toLocaleString("en-US")}`;
     const imageStyle = {
            ...styles.image,
            filter: inStock ? 'none' : 'grayscale(100%)'
        }
     const buttonStyle = {
        ...styles.button,
        backgroundColor: inStock ? "#007bff" : "#ccc",
        color: inStock ? "#fff" : "#777",
        cursor: inStock ? "pointer" : "not-allowed"
     }

    return(
        <>
        
        
        {/* <div style={styles.mainDiV}> */}
       <div style={styles.card}>

        <div style={styles.imageWrapper}>
            <img src={image} alt={name} style={imageStyle} />
            {!inStock && <div style={styles.badge}>Out of Stock</div>}
        </div>
        <div style={styles.body}>
            <h3 style={styles.name}>{name}</h3>
            <div style={styles.rating}>
                <StarRating rating={2} />
            </div>
            <div style={styles.price}>{formatPrice(price)}</div>
            <button style={buttonStyle} disabled = {!inStock}>
                {inStock ? "Add to Cart" : "Unavailable"}
            </button>

            

        </div>
       
       </div>
       {/* </div> */}
       </>
    
    );

}
export default ProductCard;