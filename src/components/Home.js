import { Link } from "react-router-dom";
import React from "react";
import backgroundImg from './assets/background.jpeg';
import serviceImg1 from './assets/typeOfService1.jpg';
import serviceImg2 from './assets/typeOfService2.jpg';
import serviceImg3 from './assets/typeOfService3.jpg';
import serviceVid4 from './assets/typeOfService4.mp4';
import serviceImg5 from './assets/typeOfService5.jpg';
import serviceImg6 from './assets/typeOfService6.jpg';
import mainService2 from './assets/mainServices1.jpg';
import mainService1 from './assets/mainService2.jpg';
import mainService3 from './assets/mainServices3.jpg';
import './styles/homepage.css';
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <div>
        <div className="main">
             <div className="overlay"></div>
                <img src={backgroundImg} alt="Garage Polished Floor" className="background-img" />
                <div class="content1">
                    <h1>Iconic Coating</h1>
                    <div className="brkLine"></div>
                    <h2 className="p1">"Transform your dull floors into stunning works of art with<br/> our polished concrete services!"</h2>
                    <Link to="/learnMoreIconic"><button className="content1Btn">Learn More</button></Link>
                </div>
            </div>
            <div className="content2">
                <div className="subContent2">
                    <div className="constructionTheme">
                    <h1>What We Offer</h1>
                        <p>Located in Candler, NC, we are passionate about the versatility and beauty of concrete as a flooring option. Our team is dedicated to
                         providing our clients with the perfect finish for their floors, and we take pride in delivering top-quality service and results. With years
                         of experience in the concrete polishing industry, our team of experts is committed to meeting the unique needs and preferences of each client.
                        </p>
                      <div className="buttonWrapper">
                         <Link to="/Showroom">
                         <button className="btnConstruction">View Our Recent Projects!</button>
                         </Link>
                      </div>
                    </div>
                </div>
                <div className="galleryGrid">
                    <div className="gridItem"><img src={serviceImg1} alt="typeOfService"/></div>
                    <div className="gridItem"><img src={serviceImg2} alt="typeOfService"/></div>
                    <div className="gridItem"><img src={serviceImg3} alt="typeOfService"/></div>
                    <div className="gridItem"><video controls playsInline autoPlay loop muted><source src={serviceVid4} type="video/mp4" /></video></div>
                    <div className="gridItem"><img src={serviceImg5} alt="typeOfService"/></div>
                    <div className="gridItem"><img src={serviceImg6} alt="typeOfService"/></div>
                </div>
            </div>
            <div className="content3">
                <h1>Our service</h1>
                <div className="content3P"><p>Refresh your floors with our wide range of options to suit your style and needs. Durable and low-maintenance flooring options for
                    businesses and commercial spaces.High-quality flooring installations for new construction projects, on time and on budget.</p>
                </div>
                <div className="servicesContent"> 
                    <div className="service">
                        <img src={mainService1} alt="Residential Floor Coating"></img>
                        <h2>Residential Floor Coating</h2>
                        <p>Residential floor coating is a process that involves applying a protective layer on the surface of your home's flooring. The coating helps to enhance the appearance of the floor while also providing a layer of protection against scratches, stains, and other forms of damage. Residential floor coating is available in a range of materials, including epoxy and polyurethane, and can be customized to meet your specific needs and preferences. </p>
                        <Link to="/Services/HomeServices" className="btnServices"><button>Learn More</button></Link>
                    </div>
                    <div className="service">
                        <img src={mainService2} alt="Epoxy Flooring Solutions"></img>
                        <h2>Epoxy Flooring Solutions</h2>
                        <p>Epoxy flooring solutions are a popular choice for both residential and commercial settings due to their durability, versatility, and aesthetic appeal. Epoxy coatings are made from a mixture of resins and hardeners that create a chemical bond with the surface they are applied to. This results in a seamless, long-lasting, and easy-to-clean flooring option that can be customized to suit a variety of styles, purposes and need's that our Customer deserve.</p>
                        <Link to="/Services/EpoxyFlooringSolutions" className="btnServices"><button>Learn More</button></Link>
                    </div>
                    <div className="service">
                        <img src={mainService3} alt="Resurfacing Concrete Floors"></img>
                        <h2>Resurfacing Concrete Floors</h2>
                        <p>Resurfacing concrete floors is an affordable and effective way to update the look of worn or damaged concrete surfaces. This process involves applying a thin layer of concrete overlay or microtopping to the existing surface, which can be customized with a variety of colors, patterns, and textures. With resurfacing, you can transform your old and dull concrete floors into a beautiful and durable surface that looks brand new. To learn more click on !</p>
                            <Link to="/Services/ResurfacingConcreteFloors" className="btnServices"><button>Learn More</button></Link>
                    </div>
                </div>
            </div>
            <div className="content4">
                <h2>Testimonial</h2>
                <div className="testContainer">
                    <div className="testimonial">
                        <div className="testContent">
                        <p>"We recently had our concrete floors polished, and the transformation is incredible! The finish is so smooth and shiny, it's almost like walking on glass. 
                            It's also much easier to clean than before, which is a huge bonus. We're really happy with the work that was done."</p>
                            </div>
                        <div className="customerDetails">    
                            <h3>Kiera Thompson</h3>
                            <p>Residential Customer</p>
                        </div>
                    </div>    
                    <div className="testimonial">
                        <div className="testContent">
                        <p>"We had our hardwood floors refinished and polished last month, and I'm so impressed with the results. The workers were very meticulous, and the end result
                            is a beautifully polished floor that looks like new. It really brings out the natural beauty of the wood."</p>
                            </div>
                        <div className="customerDetails">
                            <h3>Lucas Rodriguez</h3>
                            <p>Residential Customer</p>
                        </div>
                    </div>    
                    <div className="testimonial">
                        <div className="testContent">
                        <p>"I work in a retail store that recently had its floors polished, and it's made a huge difference in the overall appearance of the store. The floors are now so 
                            shiny and reflective that they almost look like a mirror. Customers are commenting on how great the store looks, and it's definitely helped to increase foot traffic.</p>
                            </div>
                        <div className="customerDetails">
                            <h3>Nadia Patel</h3>
                            <p>Store Owner</p>
                        </div>
                    </div>    
                    <div className="testimonial">
                        <div className="testContent">
                        <p>"I work in a retail store that recently had its floors polished, and it's made a huge difference in the overall appearance of the store. The floors are now so 
                            shiny and reflective that they almost look like a mirror. Customers are commenting on how great the store looks, and it's definitely helped to increase foot traffic.</p>
                            </div>
                        <div className="customerDetails">
                            <h3>Nadia Patel</h3>
                            <p>Store Owner</p>
                        </div>
                    </div>   
                </div>
            </div>

        </div>
    );
}

export default Home;
