const express = require ("express");
const mongoose = require ('mongoose')
const bcrypt = require("bcrypt")
const validator = require("validator")


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

    //validation
    if(!email || !password){
        throw Error("All fields must be filled in")
    }

    if(!validator.isEmail(email)) {
        throw Error("Email is not valid")
    }

    if(!validator.isStrongPassword(password)) {
        throw Error("Password not strong")
    }
    
    const exists = await this.findOne({email})

    if(exists){
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({email, password: hash})

    return user

} 



// static login method

RegistrationSchema.statics.login = async function(email, password) {

    //validation
    if(!email || !password){
        throw Error("All fields must be filled in")
    }

    const user = await this.findOne({email})

    if(!user){
        throw Error('Incorrect email')
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match) {
        throw Error("Incorrect password")
    }

    return user

}




const Registration = mongoose.model("Registration", RegistrationSchema)

module.exports = Registration;