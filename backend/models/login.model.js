const mongoose = require("mongoose")
const {Schema} = mongoose

const req = {required:true}

const login = new Schema({
    name:{...req,type:String},
    email:{...req,type:String},
    type:{...req,type:String,default:"user"},
    password:{...req,type:String}
})

module.exports = mongoose.model('logins',login)