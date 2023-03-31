require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const app = express();
const port = 3000;

// Use body-parser middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// Define the route for handling form submissions
app.post('/api/form', (req, res) => {
  
  console.log('Request received');
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

  } = req.body;

  // Set up the email transport
  const transporter = nodemailer.createTransport({
    service: 'SendGrid',
    port:port,
    auth: {
      user: 'apikey',
      pass: process.env.SENDGRID_API_KEY,
    },
  });
  console.log('Transporter:', transporter);

  // Set up the email message
  const mailOptions = {
    from: 'iconiccoating@outlook.com',
    to: 'guillermotest9@gmail.com',
    subject: `New project inquiry from ${firstName} ${lastName}`,
    text: `
    Customer Information:
    ----------------
    Customer Name: ${firstName} ${lastName}
    Street Address:${streetAddress}
    City: ${city}
    State: ${state}
    Zip Code: ${zipCode}
    Phone: ${phone}
    Email: ${email}
    Preferred Contact Time: ${contactTime}
    Preferred Contact Method: ${contactMethod}  

    Project Details:
    ----------------
    Project Size: ${projectSize}
    Project Type: ${projectType}
    Floor Shine Type: ${floorShine}
    Additional Information: ${additionalInfo} 
  `,
    html: `
      <h2>Customer Information</h2>
      <ul>
        <li><strong>Name:</strong> ${firstName} ${lastName}</li>
        <li><strong>Street Address:</strong> ${streetAddress} </li>
        <li><strong>City:</strong> ${city}</li>
        <li><strong>State:</strong> ${state}</li>
        <li><strong>Zip Code:</strong> ${zipCode}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Preferred Contact Time:</strong> ${contactTime}</li>
        <li><strong>Preferred Contact Method:</strong> ${contactMethod}</li>

      </ul>
      <h2>Project Details</h2>
      <ul>
        <li><strong>Project Size:</strong> ${projectSize}</li>
        <li><strong>Project Type:</strong> ${projectType}</li>
        <li><strong>Floor Shine Type:</strong> ${floorShine}</li>
        <li><strong>Additional Information:</strong> ${additionalInfo}</li>
      </ul>
    `
  };

  console.log('Mail Options:', mailOptions);
  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Sorry, there was an error sending your message. Please try again later.');
    } else {
      console.log('Email sent: ' + info.response);
      res.send({ message: 'Your message has been sent!' });
    }
  });

});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port} `);
});
