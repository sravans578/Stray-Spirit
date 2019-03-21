const mongoose = require('mongoose');

var productUploaderSchema = {
    firstName: { type:String , required:true },
    lastName: { type:String , required:true },
    uId:{type: String, required:true}
};


const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productName: { type:String , required:true },
    productPrice: { type:Number , required:true },
    productQuantity: {type:Number , required:true},
    productDescription: { type:String , required:true },
    productPic: { type:String , required:true },
    productUploader: productUploaderSchema
    
});

module.exports = mongoose.model('Product', productSchema);