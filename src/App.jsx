import ProfileCard from "./components/ProfileCard";
import PriceTag from "./components/PriceTag";
import AlertBox from "./components/AlertBox";
import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard";
import TeamPage from "./components/TeamPage";
import RedmiNote15 from "./assets/RedmiNote15.jpg";
import SamsungGalaxyA16 from "./assets/SamsungGalaxyA16.jpg"

import React from "react";


const App = () => {
  const mainDiV = {
      dispay: 'flex',
      flexDirection: "row",
      gap: '3px'
             }
  
  const containerStyle = {
    backgroundColor: '#dab1b1',
    display : "flex",
    // justifyContent: 'center',
    alignItems: 'flex-start',
    minHeight: '40vh',
    gap: '15px',
    padding : '20px'
    
  }
  const buttonStyle = {
    padding: '4px 10px',
    fontSize: '10px',
    display: 'inline-block',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#ffffff',
    cursor: 'pointer',
    borderRadius:'3px'

  }
  const priceStyles = {
    display: 'flex',
    flexDirection : 'column',
    gap: '3px',
    backgroundColor: '#d5e3f3',
    padding : "20px 10px"


  }
  const linksArray = [
    {label: 'Home',
     href : '#home'
    },
    {label: 'Products',
     href : '#products'
    },
    {label: 'About',
     href : '#about'
    },
    {label: 'Contact',
     href : '#contact'
    }

  ]
  const team = [
  { name: "Amina Wanjiku", role: "Lead Developer", avatar: "https://i.pravatar.cc/150?img=21", bio: "Full-stack engineer with 5 years of experience." },
  { name: "Brian Ochieng", role: "UI Designer", avatar: "https://i.pravatar.cc/150?img=2", bio: "Passionate about clean, accessible design." },
  {name: "Alice Wangui", role: "Lead Secretary", avatar: "https://i.pravatar.cc/150?img=10", bio: "Very good noise maker." },
  { name: "Peter Kimani", role: "UX Designer", avatar: "https://i.pravatar.cc/150?img=4", bio: "Passionate about front End Design." },
  {name: "Justin Gitonga", role: "Lead Technologist", avatar: "https://i.pravatar.cc/150?img=18", bio: "Full-stack conman with 5 years of experience." },
  { name: "Ruth Kibia", role: "UI Designer", avatar: "https://i.pravatar.cc/150?img=9", bio: "Passionate about Data Analytics" }
  
];
  return(
    <>
    <NavBar brand="NavBar.jsx " links = {linksArray}/>
    <div style={containerStyle}>
       
      <ProfileCard name = "Loise Wambui" 
                 title= "Senior Software Engineer Oracle Kenya" 
                 avatar = "https://plus.unsplash.com/premium_photo-1661589836910-b3b0bf644bd5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                 location="Nairobi, Kenya" 
                 rating={4}
              />

       <div style={priceStyles}>
        <p><i><small>PriceTag.jsx</small></i></p>
          <PriceTag price={2000} discount={25}/> 
          < PriceTag  price={4000} /> 

          <PriceTag  price={50} currency="USD" /> 
       
      </div>
      <div>
        <p><i><small>AlertBox.jsx</small></i></p>
        <AlertBox type = 'success' message = 'Payment received' />
        <AlertBox type = 'warning' message = 'low stock'>
          <p>Only 3 items remaining in your cart</p>
        </AlertBox>
        <AlertBox type = 'error' message = 'payment failed'>
          <button style={buttonStyle}>Try Again</button>
        </AlertBox>
      </div>
      
      <div style={{display: 'flex',gap: '2px'}}>
        
        <ProductCard  image = {RedmiNote15} name = "ProductCard.jsx" price = {35000} rating = {3} inStock={true}/>
        <ProductCard  image = {SamsungGalaxyA16} name = "SamsungGalaxyA16.jpg" price = {54000} rating = {4} inStock={false}/>
      
      </div>


      </div>
      
      <TeamPage members = {team}/>

      
      
      
          </>

  )
}



export default App
