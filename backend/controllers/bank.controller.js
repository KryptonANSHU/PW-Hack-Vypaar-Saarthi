const bankModel = require('../models/bank.model')
const userModel = require('../models/user.model')

exports.getBank = async (req,res) => {
    try {
        const data = await bankModel.findOne({uid:req.user}).select("-password")
        if(!data) return res.status(401).json({msg:"User Does not exists",type:"Bank",status:false})
        res.status(200).json({data,status:true})
    }
    catch (err) {
        console.log(err)
        res.status(400).json({ msg: "Some Error Occured" })
    }
}

exports.createBank = async (req, res) => {
    try {
        await bankModel.create({ ...req.body, uid: req.user })
        res.status(200).json({ msg: "Application successfull", status: false })
    }
    catch (err) {
        console.log(err)
        res.status(400).json({ msg: "Some Error Occured" })
    }
}

exports.getMSME = async (req,res) => {
    try {
        const data = await bankModel.findOne({uid:req.user})
        const msme = await userModel.find({city:data.city})
        res.status(200).json({msme})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"Some Error Occuered",status:false})       
    }
}