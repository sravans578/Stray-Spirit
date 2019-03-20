const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    eventdesc: String,
    uploader: String,
    location: String,
    created: String
});

module.exports = mongoose.model('Event', eventSchema);