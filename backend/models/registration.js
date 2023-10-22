const express = require ("express");
const mongoose = require ('mongoose')


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




const Registration = mongoose.model("Registration", RegistrationSchema)

module.exports = Registration;