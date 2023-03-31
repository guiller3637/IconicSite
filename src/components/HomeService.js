import { Link } from "react-router-dom";
import React from "react";
import HomeServiceVid from './assets/residentialHomeCoating.mp4';
import './styles/ServicesDetails.css';
import Footer from './Footer';
import { useEffect } from "react";

function  HomeServices(){ 
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <div className="servicesDetailsContent">
           <div className="banner-title">
                <h1>Residential Floor Coating</h1>
                <span className="textBlack"> <Link className="textWhite" to="/">Home </Link>/  Residential Floor Coating</span>
            </div>
            
            <div className="servicesDetails">   
                <div className="contentServicesOption"> 
                <h1>Long-Lasting Concrete Floor Coatings & Solutions</h1>
            <div className="brLineServices"></div>
                   <p className="introToService">Iconic Coating provides a range of floor coating solutions designed to enhance the longevity and durability of your floors. Our concrete floor coatings are tailored to suit the 
                    specific requirements of your business and facility. Our selection includes popular options such as MMAs, Polyaspartics, and Urethanes, which offer superior protection against damage 
                    from dents, cracks, chips, moisture, and chemicals. Additionally, our coatings can enhance the appearance of your space by providing a bright and polished finish. Regardless of your 
                    flooring needs, we have the perfect concrete floor coating to meet your unique application.</p>
                    <p><video autoPlay loop playsInline muted><source src={HomeServiceVid} type="video/mp4" /></video>
                    Home Polished Floors is a term used to describe a type of flooring that has been polished and finished to create a smooth, glossy surface. This type of 
                    flooring is typically made from materials such as:<br></br><br></br>
                    <span className="dash">-</span>Concrete <br></br>
                    <span className="dash">-</span>Marble <br></br>
                    <span className="dash">-</span>Terrazzo. <br></br><br></br>
                    The process of creating a polished floor involves grinding and smoothing the 
                    surface of the material using a series of progressively finer abrasives. This process removes any imperfections or rough spots in the material and creates a 
                    uniform surface that can be polished to a high shine. <br></br><br></br>Once the surface has been smoothed and polished, a sealant or wax is applied to protect the surface and 
                    give it a glossy finish. This finish can range from a subtle sheen to a high-gloss shine, depending on the desired effect.<br></br><br></br>Home Polished Floors are a popular 
                    choice for modern homes and commercial spaces because of their durability, low maintenance, and aesthetic appeal. They can also be customized to fit a wide range 
                    of design styles, from contemporary to traditional.
                    <br></br><br></br>For residential floors, what’s important to know is that even the most highly polished concrete floors offer plenty of 
                    slip resistance. In fact, our residential customers are often shocked by how grippy their floors feel even when wet! Overall, Home Polished Floors are a great 
                    option for anyone looking for a stylish and practical flooring solution that will stand the test of time</p>
                    </div>
                    <div className="centerBtn"><Link to="/Services" ><button className="returnServiceBtn">Return</button></Link></div>
            </div>
            <Footer/>
        </div>
    )
}

export default HomeServices;