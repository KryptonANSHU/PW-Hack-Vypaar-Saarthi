const mongoose = require('mongoose')
require('dotenv').config()

const connectToDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_CONNECTION_STRING)
        console.log("DB Connected")
    }
    catch(err){
        console.log("DB Not Connected \n",err)
    }
}

module.exports = connectToDB