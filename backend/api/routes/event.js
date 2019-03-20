const express = require('express');

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

module.exports = router; 