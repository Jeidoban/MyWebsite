var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
const data = require('../data');


router.post('/sendEmail', function (req, res) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: data.emailFrom,
            pass: data.emailPass
        }
    });

    var mailOptions = {
        from: data.emailFrom,
        to: data.emailTo,
        subject: `${req.body.name} is trying to contact you!`,
        text: `Name: ${req.body.name}\nEmail: ${req.body.email}\n\n${req.body.message}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return res.status(400).send({error: true});
        } else {
            return res.status(200).send({error: false});
        }
    });
});

module.exports = router;