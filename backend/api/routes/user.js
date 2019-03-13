//Developer : Aditya Gadhvi (B00809664)

const express = require('express');
const User=require("../models/user");
const Organization=require("../models/organizations");
const bcrypt=require("bcrypt");
const mongoose=require("mongoose");
const router = express.Router();

router.post("/signup_user", (req,res,next)=>{
    bcrypt.hash(req.body.password,10)
    .then(hash=>{
        const user=new User({
            _id:new mongoose.Types.ObjectId(),
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNumber: req.body.phoneNumber,
            email:req.body.email,
            password: hash,
            user_type:"personal",
            user_creation_date: Date()
        });
        user.save()
        .then(result=>{
            res.status(201).json({
                message:'personal user created!',
                result:result
            });
        })
        .catch(err=>{
            res.status(500).json({
                error:err
            });
        });
    });
    
});

router.post("/signup_org", (req,res,next)=>{
    bcrypt.hash(req.body.org_password,11)
    .then(hash=>{
        const organization=new Organization({
            _id:new mongoose.Types.ObjectId(),
            organizationtName:req.body.org_name,
            email:req.body.org_email,
            phoneNumber:req.body.org_phoneNumber,
            registrationNumber:req.body.registrationNumber,
            password:hash,
            user_type:"Organization",
            user_creation_date:Date()
        });
        organization.save()
        .then(result=>{
            res.status(201).json({
                message:'Organization user created!',
                result:result
            });
        })
        .catch(err=>{
            res.status(500).json({
                error:err
            });
        });
    });
    
});

router.post("/login")



module.exports = router;