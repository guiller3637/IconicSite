import { Link } from "react-router-dom";
import React from "react";
import epoxyFlooringSolution from './assets/epoxyFlooringSolution.jpg'
import './styles/ServicesDetails.css';
import Footer from './Footer';
import { useEffect } from 'react';
      
      
function  EpoxyFlooringSolutions(){ 
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <div className="servicesDetailsContent">
           <div className="banner-title">
                <h1>Epoxy Flooring Solutions</h1>
                <span className="textBlack"> <Link className="textWhite" to="/">Home </Link>/  Epoxy Flooring Solutions</span>
            </div>
            
            <div className="servicesDetails">   
                <div className="contentServicesOption"> 
                <h1>Durable & Beautiful Epoxy Floor Coverings</h1>
            <div className="brLineServices"></div>
                   <p className="introToService">We provide a range of epoxy coatings that can be customized to suit the unique requirements of your business and space, aimed at improving the 
                   lifespan and durability of your concrete floors. Epoxy coatings are our most popular option, offering superior protection against chemical and water spills, while also being resistant to damage from dents, cracks, and chips. In addition, these coatings reflect light up to 300 percent, which can minimize the need for extra lighting fixtures in your workspace.</p>
                    <p>  <img src={epoxyFlooringSolution}  alt="Home Services"></img>
                    Epoxy flooring is a durable and high-performance flooring solution that is commonly used in commercial and industrial settings. It is a type of coating that is applied to concrete floors, creating a seamless and smooth surface that can withstand heavy foot and vehicle traffic. Epoxy flooring is also highly resistant to chemicals, stains, and abrasions, which makes
                    it an ideal choice for facilities that deal with hazardous materials.<br></br><br></br>
                    In addition to its durability, epoxy flooring is also highly customizable, with a wide range of colors and finishes available to choose from. This allows 
                    businesses to create a unique look that fits their brand and overall aesthetic. Epoxy flooring can also be designed to include safety markings, logos, and 
                    designs, improving the overall safety and organization of the space.<br></br><br></br>
                    One of the best things about epoxy flooring is its ease of maintenance. It is easy to clean and does not require any special cleaning products or equipment. This can save businesses time and money on upkeep costs, allowing them to focus on their core operations. 
                    <br></br><br></br>Overall, epoxy flooring is a highly functional and cost-effective solution for commercial and industrial flooring needs. Its durability, customization options, and low maintenance requirements make it a great investment for any business looking to 
                    improve the functionality and appearance of their space.</p>
                    </div>
                    <div className="centerBtn"><Link to="/Services" ><button className="returnServiceBtn">Return</button></Link></div>
            </div>
            <Footer/>
        </div>
    )
}

export default EpoxyFlooringSolutions;