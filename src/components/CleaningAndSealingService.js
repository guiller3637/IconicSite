import { Link } from "react-router-dom";
import React from "react";
import SealingServiceImg from './assets/cleaningAndSealingServices.jpg';
import './styles/ServicesDetails.css';
import Footer from './Footer';
import { useEffect } from 'react';
      

function  CleaningAndSealingServices(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    return(
        <div className="servicesDetailsContent">
        <div className="banner-title">
                <h1>Concrete Cleaning and Sealing Process</h1>
                <span className="textBlack"> <Link className="textWhite" to="/">Home </Link>/  Concrete Cleaning and Sealing Process</span>
            </div>
            
            <div className="servicesDetails">   
                <div className="contentServicesOption"> 
                <h1>Revive Your Concrete, Protect For The Future With Our Concrete Cleaning and Sealing Process</h1>
            <div className="brLineServices"></div>
                   <p className="introToService">Transform your dirty and worn concrete surfaces into gleaming, like-new floors with our concrete cleaning and sealing process. Our expert team uses state-of-the-art equipment and techniques to deep clean and restore your concrete surfaces, removing years of grime, stains, and buildup. With our advanced sealing process, your concrete will be protected from future damage, ensuring long-lasting durability and a beautiful finish. Say goodbye to dull and dingy concrete surfaces and hello to a stunning, low-maintenance floor that will impress visitors and customers alike.</p>
                    <p>  <img src={SealingServiceImg}  alt="Home Services"></img>
                    Improves appearance: A clean and sealed concrete floor looks more attractive and shinier than one that's dirty and stained and not sealed. 
The sealer protect and enhance the color and texture of the concrete, giving it protection  shine and professional appearance
Is an economical way to improve the appearance of your floor.<br></br><br></br>
Enhances Safety: Dirty or damaged concrete surfaces can be a safety hazard, causing slips, trips, and falls. Cleaning and sealing the surface can help to create a safer environment for you, your family, or your employees.
By cleaning the surface, any spills or other substances that could cause a slip-and-fall accident can be removed. Sealing the surface after cleaning can help to prevent future spills and damage, further reducing the risk of accidents.

In addition, a clean and well-maintained concrete surface is less likely to develop cracks, potholes, or other forms of damage that can cause someone to trip or fall. A smooth and even surface helps to create a safer environment for anyone who walks on it.
                    <br></br><br></br>Boosts Property Value: A well-maintained concrete surface can significantly increase the value of your property. It creates a more attractive and functional space, which can be a major selling point if you ever decide to sell your home or business.
                    Second, well-maintained concrete surfaces can increase the functionality of your property. For example, a clean and sealed patio or driveway can offer a more inviting and usable outdoor living space. This can make your property more appealing to potential buyers who 
                    are looking for a property that offers both aesthetic appeal and functionality.</p>
                    </div>
                    <div className="centerBtn"><Link to="/Services" ><button className="returnServiceBtn">Return</button></Link></div>
            </div>
            <Footer/>
        </div>
    )
}

export default CleaningAndSealingServices;