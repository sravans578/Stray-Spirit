const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Event = require('../models/event');

// router.get("/events", (req, res, next) => {
//     console.log("i am here");
//     Event.find()
//     .then(docs => {
//         res.send(docs);
//         // res.status(200).json({
//         //     message:'This is me from the server???',
//         //     events:docs   
//     }).catch(err =>{
//         console.log(err);
//         res.status(500).json({
//             error:err
//         })
//     });
// });
// });

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