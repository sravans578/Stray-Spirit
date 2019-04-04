//Authored by Aparna Sridhar [B00799570]
const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer'); 

const router = express.Router();

const Event = require('../models/event');
// Event routing for all the HTTP methods

router.get('/', (req, res, next) => {
    Event.find()
    .exec()
    .then(docs =>{
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});


router.post('/', (req, res, next) => {
    const events = new Event({
        _id: new mongoose.Types.ObjectId(),
        eventName: req.body.eventNameModel,
        eventDescription: req.body.eventDescriptionModel,
        location: req.body.locationModel,
        pincode: req.body.pincodeModel,
        eventDate:req.body.eventDateModel,
        eventUploader: {
            userId: req.body.eventUploaderModel.eventUploaderId,
            firstName: req.body.eventUploaderModel.eventUploaderfirstName,
            lastName: req.body.eventUploaderModel.eventUploaderlastName
        },
        eventPic: req.body.eventPicModel
    });
    events.save().then(result =>{
        console.log(result);
    })
    .catch(err => console.log(err));
    res.status(201).json({
        message: 'Handling POST requests to /pets',
        createdevents: events
    });
    
});

router.post('/register', (req, res, next) =>{

    let transporter = nodemailer.createTransport({

        service: 'gmail',
        // host: "",
        // port: 587,
        // secure: false, // true for 465, false for other ports
        auth: {
          user: 'aadesh.ks@somaiya.edu', // generated ethereal user
          pass: 'oZm2fceu&' // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
      });
    
      // setup email data with unicode symbols
      let mailOptions = {
        from: '"Stray Spirit" <aadesh.ks@somaiya.edu>', // sender address
        to: req.body.email, // list of receivers
        subject: "Your Registeration is confirmed", // Subject line
        text: "Here are your event information:" // plain text body
        // html: "req.body.events" // html body
      };
    
      // send mail with defined transport object
     transporter.sendMail(mailOptions, (error, info) => {
         if(error) {
             return console.log(error);
         }
         console.log("Message sent: %s", info.messageId);
         // Preview only available when sending through an Ethereal account
         console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

     });
    
      
    
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    // res.render('register');

});

router.get('/singleevent/:eventId', (req, res, next) => {
    const id = req.params.eventId;
    Event.findById(id)
    .exec()
    .then(doc =>{
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error:err});
    });
});

module.exports = router; 