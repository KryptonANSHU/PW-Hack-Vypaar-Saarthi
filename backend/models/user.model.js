const mongoose = require("mongoose")
const {Schema} = mongoose

const req = {required:true}

const user = new Schema({
    name:{...req,type:String},
    email:{...req,type:String},
    uid:{...req,type:String},
    consentId:{...req,type:String}, 
    mobile:{...req,type:Number},
    date:{type:Date,default:Date.now},
    aadhar:{...req,type:Number}, 
    udyam:{...req,type:String},
    gst:{...req,type:String},
    pan:{...req,type:String},
    businessType:{...req,type:String},
    coords:{...req,
        type:Map
    },
    grossIncome:{...req,type:Number},
    city:{...req,type:String},
    state:{...req,type:String},
    age:{type:Number,default:0},
    description:{...req,type:String}
})

module.exports = mongoose.model('users',user)