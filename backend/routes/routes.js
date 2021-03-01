const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/signupmodels')

router.post('/register' , (request, response) =>{
    const SignedUpUser = new signUpTemplateCopy({
        firstname:request.body.firstname,
        lastname:request.body.lastname,
        email:request.body.email,
        mobile:request.body.mobile,
        password:request.body.password
    })
    SignedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})


module.exports = router