const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/products');

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
        productPrice: req.body.productPrice,
        productDescription: req.body.productDescription,
        productPic: req.body.productPic,
        productUploader: {
            firstName: 'Aadesh',
            lastName: 'Shah'
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

router.get('/:productId', (req, res, next) => {
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

router.delete('/:productId', (req, res, next) => {
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