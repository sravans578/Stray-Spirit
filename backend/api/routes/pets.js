const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Pet = require('../models/pets');

router.get('/', (req, res, next) => {
    Pet.find()
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
    const pets = new Pet({
        _id: new mongoose.Types.ObjectId(),
        petName: req.body.petName,
        petCategory: req.body.petCategory,
        petAge: req.body.petAge,
        petGender: req.body.petGender,
        petHealth: req.body.petHealth,
        petDescription: req.body.petDescription,
        petUploader: {
            firstName: req.body.petUploader.firstName,
            lastName: req.body.petUploader.lastName
        },
        petLocation:{
            petCity: req.body.petLocation.petCity,
            petState: req.body.petLocation.petState,
            petCountry: req.body.petLocation.petCountry
        },
        adoptionStatus: req.body.adoptionStatus
    });
    pets.save().then(result =>{
        console.log(result);
    })
    .catch(err => console.log(err));
    res.status(201).json({
        message: 'Handling POST requests to /pets',
        createdPet: pets
    });
});

router.get('/:petId', (req, res, next) => {
    const id = req.params.petId;
    Pet.findById(id)
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

router.patch('/:petId', (req, res, next) => {
    const id = req.params.petId;
    const updateOps = {};
    for (const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Pet.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.delete('/:petId', (req, res, next) => {
    const id = req.params.petId;
    Pet.remove({ _id: id} )
    .exec()
    .then(result =>{
        res.status(200).json(result);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
});

module.exports = router;