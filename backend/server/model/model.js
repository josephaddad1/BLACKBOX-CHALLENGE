const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    id : {
        type : String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true 
    }
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;