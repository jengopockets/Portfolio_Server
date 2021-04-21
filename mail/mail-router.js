const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post('/', (req, res) => {
    console.log(req.body);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user:'jengodevmail@gmail.com',
            pass: process.env.EPASS
        }
    });
    
    const mailOptions = {
        from: 'jengoportmail@gmail.com',
        to: 'jengodev@gmail.com',
        subject: 'New Port Message',
        text: `
        Message from: ${req.body.name}
        Email: ${req.body.email}
        Phone Number: ${req.body.number}
        Message: ${req.body.message}
        `
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if(err){
            console.log(err);
        } else {
            console.log('Email sent:' + info.response);
        }
    });

    return res.sendStatus(200);
    
});

module.exports = router;