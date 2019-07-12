const mongoose = require('mongoose');

var orderUploaderSchema = {
    firstName: { type:String , required:true },
    lastName: { type:String , required:true },
    uId:{type: String, required:true}
};


  



//Schema created for orders https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    orderName: { type:String , required:false },
    totalPrice: { type:Number , required:false },
    orderPlacedDate : { type:String , required:false },
    estimatedDeliveryDate : { type:String , required:false },
    orderStatus : { type:String , required:false },
    products: [],
    orderUploader: orderUploaderSchema
    
});

module.exports = mongoose.model('Order', orderSchema);