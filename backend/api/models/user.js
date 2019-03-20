//Developer : Aditya Gadhvi (B00809664)

const mongoose = require("mongoose");
//const uniqueValidator=require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName:String,
    lastName:String,
    phoneNumber:Number,
    email:{type:String, unique:true},
    password:String,
    user_type:String,
    user_creation_date:String
});




//userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);