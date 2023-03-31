import { Link } from "react-router-dom";
import React,{useRef}from "react";
import './styles/Contact.css';
import Footer from './Footer';
import { useEffect } from 'react';


function Contact() {

const formRef = useRef(null);
        useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
          
    const handleSubmit = async (event) => {
        event.preventDefault();
        const {
            firstName,
            lastName,
            phone,
            email,
            projectSize,
            projectType,
            floorShine,
            additionalInfo,
            streetAddress,
            city,
            state,
            zipCode,
            contactTime,
            contactMethod,

        } = event.target.elements;
    
        const formData = {
            firstName: firstName.value,
            lastName: lastName.value,
            phone: phone.value,
            email: email.value,
            projectSize: projectSize.value,
            projectType: projectType.value,
            floorShine: floorShine.value,
            additionalInfo: additionalInfo.value,
            streetAddress: streetAddress.value,
            city: city.value,
            state: state.value,
            zipCode: zipCode.value,
            contactTime: contactTime.value,
            contactMethod: contactMethod.value,
        };
        try {
            const response = await fetch('/api/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            const data = await response.json();
            alert(data.message);
          
        } catch (error) {
            console.error(error);
            alert('Sorry, there was an error sending your message. Please try again later.');
        } 
        formRef.current.reset();
    };
    return (
        <div>
            <div className="banner-title">
                <h1>Contact Us</h1>
                <span className="textBlack"> <Link className="textWhite" to="/">Home </Link>/  Contact</span>
            </div>
            <div className="contactUsContent">
                <div className="mapContent">
                    <h1>Location</h1>
                   <div className="border" > 
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d207708.50922073663!2d-82.5118215!3d35.5673955!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa12f3fb07b4dcae5%3A0xd76e3c4731bdb093!2sIconic%20Co.!5e0!3m2!1sen!2sus!4v1680287597565!5m2!1sen!2sus"
                    title="Map"
                    width="100%"
                    height="100%"
                    style={{ border: 0, position: "relative", top: 0, left: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <p>Our business serves customers who are over an hour away from our base, offering high-quality products and services to clients in distant locations.
                 <br></br>Despite the distance, we strive to provide our customers with an exceptional experience and are committed to going the extra mile to ensure that they receive the solutions they need, no matter where they are located.</p>
                </div>
                <div className="quoteContent">
                    <h1>Request a Quote!</h1>
                <form id="form" onSubmit={handleSubmit} ref={formRef} >
                    
                <h2>Customer Information</h2>
                <div className="info">
                    <div className="costumerInfo">    
                        <label for="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName" required pattern="[A-Za-z]+" />
                    
                        <label for="lastName">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" required />
                    
                        <label for="phone">Phone Number:</label>
                        <input type="tel" id="phone" name="phone" required pattern="[0-9]{10}" />
                    
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required />

                        <label for="contactMethod">Preferred Contact Method:</label>
                        <select id="contactMethod" name="contactMethod" required>

                        <option value="">Choose...</option>
                        <option value="phone">Phone</option>
                        <option value="email">Email</option>
                        </select>
                    </div>
                    <div className="addressInfo">
                        <label for="streetAddress">Street Address:</label>
                        <input type="text" id="streetAddress" name="streetAddress" required />

                        <label for="city">City:</label>
                        <input type="text" id="city" name="city" required />

                        <label for="state">State:</label>
                        <select id="state" name="state" required>
                            <option value="">--Please select a state--</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option> 
                    </select>
                    
                       <label for="zipCode">ZipCode:</label>
                        <input type="text" id="zipCode" name="zipCode" required />

                        <label for="contactTime">Preferred Contact Time:</label>
                        <select id="contactTime" name="contactTime" required>

                        <option value="">Choose...</option>
                        <option value="morning">Morning</option>
                        <option value="afternoon">Afternoon</option>
                        <option value="evening">Evening</option>
                        </select>
                    </div>
                </div>
                    <hr></hr>
                    <h2>Project Information</h2>
                    <div className="projectDetails">
                        <div className="dropdownContent"> 
                        <label for="projectSize">Project Size:</label>
                        <select id="projectSize" name="projectSize" required>
                            <option value="">-- Please select a size --</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                        </div> 
                        <div className="dropdownContent">
                        <label for="projectType">Project Type:</label>
                        <select id="projectType" name="projectType" required>
                            <option value="">-- Please select a type --</option>
                            <option value="residential">Residential</option>
                            <option value="commercial">Commercial</option>
                            <option value="industrial">Industrial</option>
                        </select>
                        </div>
                        <div className="dropdownContent">
                        <label for="floorShine">FloorShine Type:</label>
                        <select id="floorShine" name="floorShine" required>
                            <option value="">-- Please select a shine type --</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                        </div>
                    </div>
                    <div className="additionalContent">
                        <label for="additionalInfo">Additional Information:</label>
                        <textarea id="additionalInfo" name="additionalInfo"></textarea>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                    </form>

                </div>
            </div>
            <Footer/>
       </div>
    );
 }

 export default Contact;
