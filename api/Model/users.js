const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    
    _id: { type: String, required: true },
    name: { type: String, required: true},
    email: { type: String, required: true},
    picture: { type: String}

},{collection: 'users'});

module.exports = mongoose.model('users', userSchema)