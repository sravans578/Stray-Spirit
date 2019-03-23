// Event routes for all the HTTP methods 
const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Event = require('../models/event');

//Get method to retrive all the events from the database
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

// Post method to store all the event information onto the database
// Body-parser is used to collect the body/content of the post request
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

// Get method to find an event by Event ID
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