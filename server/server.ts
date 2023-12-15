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

// Tillad specifikke domæner
const corsOptions = {
    origin: ['https://grusvej.dk', 'http://localhost:3000'], // Erstat med din Netlify-apps URL
};
app.use(cors(corsOptions));
// Lav api end points
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/send-email', async (req, res) => {
    let transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'grusvej-linkedin@hotmail.com',
            pass: 'Grusvejdk2023'
        }
    });

    let mailOptions = {
        from: 'grusvej-linkedin@hotmail.com',
        to: 'kontakt@grusvej.dk', // Dette vil sende e-mailen til dig
        subject: 'Form submission',
        text: `
        Brugt grusvej formular

        
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

app.post('/send-miniemail', async (req, res) => {
    let transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: 'grusvej-linkedin@hotmail.com',
            pass: 'Grusvejdk2023'
        }
    });


    let mailOptions = {
        from: 'grusvej-linkedin@hotmail.com',
        to: 'kontakt@grusvej.dk', // Dette vil sende e-mailen til dig
        subject: 'Form submission',
        text: `
        Brugt Kontaktformular


        E-mail: ${req.body.email},
        
        Telefon: ${req.body.phone},
        
        Navn: ${req.body.name},
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
