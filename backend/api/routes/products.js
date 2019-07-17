const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const Product = require('../models/products');
//route for fetching the product along with reviews
router.get('/', (req, res, next) => { 
    Product.find()
    .exec()
    .then(docs =>{
        res.status(200).json(docs);
    })
    .catch(err =>{
        res.status(500).json({
            error: err
        });
    });
});

router.post('/', (req, res, next) => {
    const products = new Product({
        _id: new mongoose.Types.ObjectId(),
        productName: req.body.productName,
        productCategory:req.body.productCategory,
        productPrice: req.body.productPrice,
        productQuantity:req.body.productQuantity,
        productDescription: req.body.productDescription,
        productPic: req.body.productPic,
        productUploader: {
            firstName: req.body.productUploader.firstName,
            lastName:req.body.productUploader.lastName,
            uId: req.body.productUploader.uId
            
        },
        
        
    });
    products.save().then(result =>{
       })
    .catch(err => console.log(err));
    res.status(201).json({
        message: 'Handling POST requests to /inventory',
        createdProduct: products
    });
});

router.get('/singleproduct/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
    .exec()
    .then(doc =>{
        res.status(200).json(doc);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error:err});
    });
});

//route for updating the product
router.put('/update/:id', (req, res, next) =>{
    const id=req.params.id;
    console.log(id);
    
    Product.findByIdAndUpdate( id, {
        _id: id,
        productName: req.body.productNameModel,
        productPrice: req.body.productPriceModel,
        productDescription: req.body.productDescriptionModel,
        productQuantity: req.body.productQuantityModel,
        productPic:req.body.productPicModel,
        productCategory:req.body.productCategoryModel,
        productReview : req.body.productReview,
        productUploader: {
            uId: req.body.productUploaderModel.productUploaderId,
            firstName: req.body.productUploaderModel.productUploaderfirstName,
            lastName: req.body.productUploaderModel.productUploaderlastName
        }
       

    }).then( result=>{
        console.log(result);
        res.status(200).json({
            message: "Update successfull!"
        });
    });
});


router.get('/uploader/:userId', (req, res, next) => {
    const id = req.params.userId;
    Product.find({
        'productUploader.uId':id
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


router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId;
    const updateOps = {};
    for (const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Product.update({ _id: id }, { $set: updateOps })
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
//route for deleting the product
router.delete('/delete/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.remove({ _id: id} )
    .exec()
    .then(result =>{
        res.status(200).json(result);
    })
    .catch(err =>{
        res.status(500).json({
            error: err
        })
    })
});

module.exports = router;



