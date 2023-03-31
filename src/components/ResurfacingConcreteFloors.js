import { Link } from "react-router-dom";
import React, {useEffect} from "react";
import HomeServiceImg from './assets/Polished_Home_Floor.jpg';
import './styles/ServicesDetails.css';
import Footer from './Footer';


function  ResurfacingConcreteFloors(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <div className="servicesDetailsContent">
           <div className="banner-title">
                <h1>Resurfacing Concrete Floors</h1>
                <span className="textBlack"> <Link className="textWhite" to="/">Home </Link>/  Resurfacing Concrete Floors</span>
            </div>
            
            <div className="servicesDetails">   
                <div className="contentServicesOption">  
                <h1>Long-Lasting Concrete Floor Coatings & Solutions</h1>
            <div className="brLineServices"></div>
                   <p className="introToService">Industrial concrete polishing makes your floors beautiful and strong without having to apply a permanent coating. Our expert technicians will grind down the top layer of your concrete floor to remove blemishes and imperfections and then apply chemicals to make the surface durable and stain resistant. Once we do a final polish, you’ll have the easy, long-lasting, and appealing floors that you and your business need and deserve.</p>
                    <p>  <img src={HomeServiceImg}  alt="Home Services"></img>
                    Stained concrete is a unique and versatile flooring solution that offers a range of benefits for both commercial and residential spaces. This flooring option involves applying a special stain to concrete surfaces, which creates a marbled or variegated look that resembles natural stone or polished marble.
                    <br></br><br></br>
                    One of the key advantages of stained concrete is its aesthetic appeal. The unique color variations and patterns that can be achieved with stained concrete can create a visually stunning and unique look for any space. Stained concrete can be customized to suit a wide range of design styles, from modern and 
                    minimalist to rustic and traditional.
                    In addition to its aesthetic appeal, stained concrete is also highly durable and long-lasting. It is resistant to damage from heavy foot traffic, spills, and even extreme temperatures. This makes it an ideal flooring choice for high-traffic areas like retail stores, restaurants, and offices.
                    <br></br><br></br>
                    Overall, stained concrete is a cost-effective and practical flooring solution that offers a unique and visually appealing finish. Its durability, low maintenance requirements, and customization options make it an ideal choice for a wide range of commercial and residential spaces. If you are looking for a flooring option that is both beautiful and functional, stained concrete is definitely worth considering.</p>
                    </div>
                    <div className="centerBtn"><Link to="/Services" ><button className="returnServiceBtn">Return</button></Link></div>
            </div>
            <Footer/>
        </div>
    )
}

export default ResurfacingConcreteFloors;