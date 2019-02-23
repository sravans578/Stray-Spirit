const mongoose = require('mongoose');

const petSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    petName: String,
    petCategory: String,
});

module.exports = mongoose.model('Pet', petSchema);