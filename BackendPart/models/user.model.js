const mongoose = require('mongoose');

var User = new mongoose.Schema({
    Fullname: {
        type: String
    },
    Email: {
        type: String
    },
    Password: {
        type: String
    }
});

module.exports = mongoose.model('User', User);