const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Adoption = require('../models/adoption');

router.post('/', (req, res, next) => {
    const adoption = new Adoption({
        _id: new mongoose.Types.ObjectId(),
        prevPet: req.body.prevPetModel,
        curPet: req.body.curPetModel,
        firstPet: req.body.firstPetModel,
        adopterPetFamily: req.body.adopterPetFamilyModel,
        petBehaviour: req.body.petBehaviourModel,
        petHome: req.body.petHomeModel,
        petAdopter: {
            userId: req.body.petAdopterModel.petAdopterId,
            firstName: req.body.petAdopterModel.petAdopterfirstName,
            lastName: req.body.petAdopterModel.petAdopterlastName,
            adopterAge: req.body.petAdopterModel.petAdopteradopterAge,
            adopterAddress: req.body.petAdopterModel.petAdopteradopterAddress,
            adopterEmail: req.body.petAdopterModel.petAdopteradopterEmail,
            adopterPhone: req.body.petAdopterModel.petAdopteradopterPhone
        },
        petDetail:{
            petId: req.body.petDetailModel.petIdModel,
            petName: req.body.petDetailModel.petNameModel,
            petUploaderId: req.body.petDetailModel.petUploaderIdModel
        },
        adoptionStatus: 'Requested',
        travel: req.body.travelModel,
        vacci: req.body.vacciModel,
        creationDate: Date()
    });
    adoption.save().then(result =>{
        console.log(result);
    })
    .catch(err => console.log(err));
    res.status(201).json({
        message: 'Handling POST requests to /adoption',
        createdPet: adoption
    });
});


router.get('/', (req, res, next) => {
    Adoption.find()
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
router.get('/singleadoption/:adoptionId', (req, res, next) => {
    const id = req.params.adoptionId;
    Adoption.findById(id)
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

router.get('/adopterUser/:userId', (req, res, next) => {
    const id = req.params.userId;
    Adoption.find({
        'petAdopter.userId':id
    })
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
router.get('/petadopt/:petId', (req, res, next) => {
    const id = req.params.petId;
    Adoption.find({
        'petDetail.petId':id
    })
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
router.delete('/delete/:adoptionId', (req, res, next) => {
    const id = req.params.adoptionId;
    Adoption.remove({ _id: id} )
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

router.put('/update/:id', (req, res, next) =>{
    const id=req.params.id;
    console.log(id);
    Adoption.findByIdAndUpdate( id, {
        _id: id,
        prevPet: req.body.prevPetModel,
        curPet: req.body.curPetModel,
        firstPet: req.body.firstPetModel,
        adopterPetFamily: req.body.adopterPetFamilyModel,
        petBehaviour: req.body.petBehaviourModel,
        petHome: req.body.petHomeModel,
        petAdopter: {
            userId: req.body.petAdopterModel.petAdopterId,
            firstName: req.body.petAdopterModel.petAdopterfirstName,
            lastName: req.body.petAdopterModel.petAdopterlastName,
            adopterAge: req.body.petAdopterModel.petAdopteradopterAge,
            adopterAddress: req.body.petAdopterModel.petAdopteradopterAddress,
            adopterEmail: req.body.petAdopterModel.petAdopteradopterEmail,
            adopterPhone: req.body.petAdopterModel.petAdopteradopterPhone
        },
        petDetail:{
            petId: req.body.petDetailModel.petIdModel,
            petName: req.body.petDetailModel.petNameModel,
            petUploaderId: req.body.petDetailModel.petUploaderIdModel
        },
        adoptionStatus: req.body.adoptionStatusModel,
        travel: req.body.travelModel,
        vacci: req.body.vacciModel

    }).then( result=>{
        console.log(result);
        res.status(200).json({
            message: "Update successfull!"
        });
    });
});

module.exports = router;