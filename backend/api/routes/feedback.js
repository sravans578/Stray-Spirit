const express = require('express');

const router = express.Router();

router.post('/', (req, res, next) => {
    // Event.find()
    // .exec()
    // .then(docs =>{
    //     console.log(docs);
    //     res.status(200).json(docs);
    // })
    // .catch(err =>{
    //     console.log(err);
    //     res.status(500).json({
    //         error: err
    //     });
    // });
    console.log("rached here")
    console.log(req.body);
});
