const express = require ("express");
const mongoose = require ('mongoose')
const bcrypt = require("bcrypt")


const RegistrationSchema = new mongoose.Schema ({
    
    names: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
},
{
  timestamps: { createdAt: true, updatedAt: true }, // Use a configuration object for timestamps
});


// Added static signup method
RegistrationSchema.statics.signup = async function(email, password) {

    const exists = await this.findOne({email})

    if(exists){
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({email, password: hash})

    return user

} 




const Registration = mongoose.model("Registration", RegistrationSchema)

module.exports = Registration;