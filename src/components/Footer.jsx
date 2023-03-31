import { Link } from "react-router-dom";
import React from "react";
import './styles/FooterPage.css';
import FacebookIcon from './assets/FacebookIcon.png';
import TwitterIcon from './assets/TwitterIcon.png';
import InstagramIcon from './assets/InstagramIcon.png';



const Footer = () =>{
    return( 
        <div className="footerPage">
            <div className="contactSection">
                <h1>Contact Us</h1>
                <p><span className="icon-location"></span>15 Storie Book LN Candler</p>
                <p><span className="icon-phone"></span>(828) 423-8196</p>
                <p><span className="icon-email"></span>sortoprime@gmail.com</p>
                <p>
                <a className="icon-social" href="https://www.facebook.com"><img src={FacebookIcon} alt="Facebook" /></a>
                <a className="icon-social" href="https://www.twitter.com"><img src={TwitterIcon} alt="Twitter" /></a>
                <a className="icon-social" href="https://www.instagram.com"><img src={InstagramIcon} alt="Instagram" /></a>
                 </p>
            </div>
            <div className="ourServices">
                <h1> Our Services</h1>
                <span className="icon"><Link to="/Services/HomeServices">Residential Floor Coating</Link></span>
                <span className="icon"><Link to="/Services/EpoxyFlooringSolutions">Epoxy Flooring Solutions</Link></span>
                <span className="icon"><Link to="/Services/ResurfacingConcreteFloors">Resurfacing Concrete Floors</Link></span>
                <span className="icon"><Link to="/Services/CleaningAndSealingServices">Concrete Cleaning and Sealing Process</Link></span>
            </div>
            <div className="ourServices">
                <h1>Quick Links</h1>
                <span className="icon"><Link to="/">HomePage</Link></span>
                <span className="icon"><Link to="/Services">Services</Link></span>
                <span className="icon"><Link to="/Showroom">Showroom</Link></span>
                <span className="icon"><Link to="/Contact">Request a Quote</Link></span>
                
            </div>
            
            <div className="brLine">
                <p>Copyright © 2023 Iconic - All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer; 