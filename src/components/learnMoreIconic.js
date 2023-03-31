import React from "react";
import {Link} from 'react-router-dom'
import './styles/learnMoreIconic.css';
import Footer from "./Footer";
import backgroundImg from './assets/learnMoreBackground.jpg';
import learn1 from './assets/learnMoreDurability.jpg';
import learn2 from './assets/learnMoreLowMaintenace.jpg';
import learn3 from './assets/learnMoreSustainability.jpg';
import learn4 from './assets/learnMoreAesthetic.jpg';
import learn5 from './assets/learnMoreCost.jpg';
import service1 from './assets/learnService1.jpg';
import service2 from './assets/learnService2.jpg';
import service3 from './assets/learnService3.jpg';
import service4 from './assets/learnService4.jpg';


function learnMoreIconic(){

    return (
        <div > 
        <div class="wrapperIcon">
            <div class="why-polished-concrete">
            <div className="introHeader">
            <img className="introImg" src={backgroundImg} alt="SPolished Floor"  />
            <div className="intro">
                 <h1>Why Polished Concrete</h1>
                <p>Polished concrete is a popular flooring option for both residential and commercial spaces. Here are some reasons why it's a great choice:</p>
            </div>
            </div>  
            <div className="reasonContent">
                <div className="reasonPolish">
                    <div className="reason-info">
                    <h2>Durability</h2>
                    <p>Polished concrete is extremely durable and can withstand heavy foot traffic, machinery, and other wear and tear. It can last for decades with proper maintenance.</p>
                    </div>
                    <div className="reason-img-container">
                    <img src={learn1} alt="Durability" className="reason-img" />
                    </div>
                </div>
                <div className="reasonPolish">
                    <div className="reason-info">
                    <h2>Low Maintenance</h2>
                    <p>Once polished and sealed, concrete floors require very little maintenance. They can be easily cleaned with a damp mop or a neutral cleaner. There is no need for waxing or stripping.</p>
                    </div>
                    <div className="reason-img-container">
                    <img src={learn2} alt="Low Maintenance" className="reason-img" />
                    </div>
                </div>
                <div className="reasonPolish">
                    <div className="reason-info">
                    <h2>Sustainability</h2>
                    <p>Polished concrete is an environmentally friendly flooring option. It utilizes the existing concrete slab, eliminating the need for additional materials. It also does not emit harmful VOCs (volatile organic compounds) like some other flooring options.</p>
                    </div>
                    <div className="reason-img-container">
                    <img src={learn3} alt="Aesthetics" className="reason-img" />
                    </div>
                </div>
                <div className="reasonPolish">
                    <div className="reason-info">
                    <h2>Aesthetics</h2>
                    <p>Polished concrete floors have a sleek, modern look that can be customized with different colors, finishes, and decorative elements. They can also be used with radiant heat systems to provide warmth and comfort.</p>
                    </div>
                    <div className="reason-img-container">
                    <img src={learn4} alt="Aesthetics" className="reason-img" />
                    </div>
                </div>
                <div className="reasonPolish">
                    <div className="reason-info">
                    <h2>Cost-Effective</h2>
                    <p>Polished concrete is a cost-effective flooring option. It is less expensive than some other materials like marble, granite, or tile. It also has lower maintenance costs over time, making it a smart long-term investment.</p>
                    </div>
                    <div className="reason-img-container">
                    <img src={learn5} alt="Aesthetics" className="reason-img" />
                    </div>
                </div>
             </div>
         </div>
            <div className="floor-resurfacing-services">
    <div className="intro2">
        <h2>Floor Resurfacing Services</h2>
        <p>At our company, we offer a range of floor resurfacing services to meet your needs. Here are some of the services we offer:</p>
    </div>
    <ul className="services-list">
        <li className="serviceOffer">
            <div className="service-text">
                <h2>EPOXY APPLICATION</h2>
                <p>We use high-quality epoxy coatings to give your floors a durable and long-lasting finish.</p>
            </div>
            <div className="service-img-wrapper">
                <img src={service1} alt="Epoxy Application" className="service-img" />
            </div>
        </li>
        <li className="serviceOffer">
            <div className="service-text">
                <h2>CLEAN AND SEAL CONCRETE FLOOR</h2>
                <p>Our team can deep clean and seal your concrete floors to protect them from damage and stains.</p>
            </div>
            <div className="service-img-wrapper">
                <img src={service2} alt="Concrete Overlays" className="service-img" />
            </div>
        </li>
        <li className="serviceOffer">
            <div className="service-text">
                <h2>STAINED CONCRETE</h2>
                <p>We offer a variety of concrete staining options to give your floors a unique and customized look.</p>
            </div>
            <div className="service-img-wrapper">
                <img src={service3} alt="Stained Concrete" className="service-img" />
            </div>
        </li>
        <li className="serviceOffer">
            <div className="service-text">
                <h2>CONCRETE OVERLAYS</h2>
                <p>If your concrete floors are worn or damaged, we can apply a concrete overlay to give them a fresh new look.</p>
            </div>
            <div className="service-img-wrapper">
                <img src={service4} alt="Concrete Overlays" className="service-img" />
            </div>
        </li>
    </ul>
    <div className="outro" style={{textAlign: 'center'}}>
        <p>Contact us today to learn more about our floor resurfacing services and how we can help you revitalize your floors.</p>
    
        <Link to="/Contact"><button className="btnQuote">Contact Us!</button></Link>
    </div>
  </div>
 
</div>
        <Footer/>
    </div>
    

    );
}

export default learnMoreIconic;