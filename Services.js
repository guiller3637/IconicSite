import { Link } from "react-router-dom";
import React,{ useEffect }from "react";
import servicesImg1 from './assets/decServicesImg1.jpg';
import servicesImg2 from './assets/decServiceImg2.jpg';
import servicesImg3 from './assets/decServiceImg3.jpg';
import servicesImg4 from './assets/decServiceImg4.jpg';
import Footer from './Footer';
import './styles/Services.css';

  

function Services(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    return(
        <div>
            <div className="service-content">
            <div className="banner-title">
                <div className="bannerContent">
                <h1>Services</h1>
                <span className="textBlack">
                    <Link className="textWhite" to="/">Home</Link> / Services
                </span>
                </div>
                </div>
                 <div className="introServiceContainer">
                <div className="introService">
                    <p>Iconic Coating can assist you in assessing the optimal treatment for your concrete flooring, tailored to your business's specific requirements, thanks to our decades of practical experience across various industries, giving us the expertise to deliver the solutions that work best for you.</p>
                </div>
                </div>

            <div className="container-content">
                <div className="descServices1">
                        <img src={servicesImg1} alt="Residential Basement Floor Coating"></img>
                        <h1>Residential Floor Coating</h1>
                        <p>Our residential floor coating service will transform your old, worn-out floors into a beautiful, durable surface that's easy to clean and maintain, giving your home a modern, sleek look while also adding value to your property. Protect your concrete floors with chemical-resistant epoxy surface coating.</p>
                        <Link to="/Services/HomeServices" className="btnDesc"><button>Learn More</button></Link>
                </div> 
                <div className="descServices2">
                        <img src={servicesImg2} alt="Basement Epoxy Flooring Solutions"></img>
                        <h1>Epoxy Flooring Solutions</h1>
                        <p>Epoxy flooring solutions offer a durable, long-lasting, and visually appealing flooring option that can transform your space into a beautiful and functional environment. Improve the look and feel of your workspace without increasing maintenance or<br></br> cost.</p>
                         <Link to="/Services/EpoxyFlooringSolutions" className="btnDesc"><button>Learn More</button></Link>
                </div>
                <div className="descServices3">
                        <img src={servicesImg4} alt="Resurfacing Concrete Floors"></img>
                        <h1>Resurfacing Concrete Floors</h1>
                        <p>Resurfacing concrete floors involves applying a thin layer of concrete or polymer-based overlay on top of the existing concrete surface to give it a new look. Industrial concrete polishing makes your floors beautiful and strong without having to apply a permanent coating.</p>
                            <Link to="/Services/ResurfacingConcreteFloors" className="btnDesc"><button>Learn More</button></Link>
                </div>
                <div className="descServices4">
                        <img src={servicesImg3} alt="Concrete Cleaning and Sealing Process"></img>
                        <h1>Concrete Cleaning and Sealing Process</h1>
                        <p>The concrete cleaning and sealing process involves cleaning the concrete surface with pressure washing, applying a concrete cleaner or etcher, sealing the surface with a concrete sealer, and allowing it to dry completely.</p>
                        <Link to="/Services/CleaningAndSealingServices" className="btnDesc"><button>Learn More</button></Link>
                </div>
            </div>
        </div>
        <Footer/>
        
        
    </div>
    
    )
}

export default Services;