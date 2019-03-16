const mongoose = require('mongoose');

var productUploaderSchema = {
    firstName: { type:String , required:true },
    lastName: { type:String , required:true }
};
// var petLocationSchema = {
//     petCity: { type:String , required:true },
//     petState: { type:String , required:true },
//     petCountry: { type:String , required:true }
// };

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productName: { type:String , required:true },
    productCategory: { type:String , required:true },
    // petAge: { type:String , required:true },
    // petGender: { type:String , required:true },
    // petHealth: { type:String , required:true },
    productDescription: { type:String , required:true },
    productUploader: productUploaderSchema,
    // petLocation: petLocationSchema,
    // adoptionStatus: { type:String, required:true }
});

module.exports = mongoose.model('Product', productSchema);