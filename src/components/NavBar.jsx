const NavBar = ({brand, links}) => {
   const styles = {
        nav: {
            
            display: 'flex',             /* Aligns list items horizontally */
            listStyleType: 'none' ,    /* Removes default bullet points */
            margin: '0',
            padding: '0',
            backgroundColor: '#333',
            justifyContent: 'space-between'
            },
            
            
        brand:{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            letterSpacing: '1px',
            },
        navLinks: {
            display: 'flex',
            listStyle: 'none',
            margin: '10px',
            padding: '5px',
            gap: '1.5rem', // Creates spacing between layout links horizontally
            
            },
        link: {
            color: '#f2f2f2',
            textDecoration: 'none',
            fontSize: '1rem',
            transition: 'color 0.2s ease-in-out',
            }

    }
    return (
        <nav style={styles.nav}>
            <div style={styles.brand}>{brand}</div>
            <ul style={styles.navLinks}>
                {links.map( (link, index) => {
                    return( 
                    <li key={index}>
                        <a href={link.href} style={styles.link}>
                            {link.label}
                        </a>
                    </li>
                    );
                })}
         
            </ul>
        </nav>
    )
    

}

export default NavBar;