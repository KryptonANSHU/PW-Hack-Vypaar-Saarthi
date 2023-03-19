const mongoose = require("mongoose")
const {Schema} = mongoose

const req = {required:true}

const bank = new Schema({
    name:{...req,type:String},
    email:{...req,type:String},
    mobile:{...req,type:Number},
    uid:{...req,type:String},
    city:{...req,type:String},
    state:{...req,type:String},
})

module.exports = mongoose.model('banks',bank)