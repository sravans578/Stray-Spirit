//Developer : Aditya Gadhvi (B00809664)

const express = require('express');
const User=require("../models/user");
const Organization=require("../models/organizations");
const bcrypt=require("bcrypt");
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
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
    bcrypt.hash(req.body.password,11)
    .then(hash=>{
        const organization=new Organization({
            _id:new mongoose.Types.ObjectId(),
            organizationtName:req.body.orgName,
            email:req.body.email,
            phoneNumber:req.body.orgPhone,
            registrationNumber:req.body.orgRegNo,
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

router.post('/login', (req, res, next) => {
    let fetchedUser;
    User.findOne({email:req.body.email}).then(user=>{
        if(!user)
        {
            return res.status(401).json({
                message:"Auth failed"
            });
        }
         fetchedUser= user;
        return bcrypt.compare(req.body.password,user.password);
    })
    .then(result => {
        if(!result){
            return res.status(401).json({
                message:"Auth failed"
            });
        }
        const token=jwt.sign(
            {email:fetchedUser.email,userId:fetchedUser._id},
            "secret_secret_secret_secret_secret",
            {expiresIn:"1h"}
            );
        res.status(200).json({
            token:token
        });
    })
    .catch(err=>{
         return res.status(401).json({
             message:"Auth failed"
        })  
    });
  });

  router.post('/orgLogin', (req, res, next) => {
   let fetchedOrg;
    Organization.findOne({email:req.body.email}).then(user=>{
        if(!user)
        {
            return res.status(401).json({
                 message:"Auth failed"
             });
        }
         fetchedOrg= user;
        return bcrypt.compare(req.body.password,user.password);
    })
    .then(result => {
        if(!result){
            return res.status(401).json({
                message:"Auth failed",
                
            });
           
        }
        const token=jwt.sign(
            {email:fetchedOrg.email,userId:fetchedOrg._id},
            "secret_secret_secret_secret_secret",
            {expiresIn:"1h"}
            );
        res.status(200).json({
            token:token
        });
    })
    .catch(err=>{
         return res.status(401).json({
             message:"Auth failed"
        })  
    });
  });

module.exports = router;