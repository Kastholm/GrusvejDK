// intialiser Express.js
const express = require('express');
const app = express();
// indhent Nodemailer
const nodemailer = require('nodemailer');
// Indhent email bruger fra .env fil
require('dotenv').config();
const cors = require('cors');
// JSON parser
app.use(express.json());
app.use(cors());
// Lav api end points
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/send-email', async (req, res) => {
    let transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: 'Christiansen95@live.dk',
            pass: 'K@stholm9fem'
        }
    });


    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Dette vil sende e-mailen til dig
        subject: 'Form submission',
        text: `
         Navn: ${req.body.name},
        
         E-mail: ${req.body.email},

         Telefon: ${req.body.phone},

         Valgte Grusvej: ${req.body.grusvej},

         Besked: 
         
         ${req.body.text}
     `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully!');
        }
    });
});
// Start Express server
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});