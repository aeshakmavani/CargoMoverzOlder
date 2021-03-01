const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({

    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    Password:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('tblSignUp', signUpTemplate)