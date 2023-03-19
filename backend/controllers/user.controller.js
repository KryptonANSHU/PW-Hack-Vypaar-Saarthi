const userModel = require("../models/user.model")

exports.getUser = async (req,res) => {
    try {
        const data = await userModel.findOne({uid:req.user}).select('-password')
        if(!data) return res.status(401).json({msg:"User Does not exists",status:false})
        res.status(200).json({data,status:true})
    }
    catch (err) {
        console.log(err)
        res.status(400).json({ msg: "Some Error Occured" })
    }
}

exports.apply = async (req, res) => {
    try {
        await userModel.create({ ...req.body, uid: req.user })
        res.status(200).json({ msg: "Application successfull", status: false })
    }
    catch (err) {
        console.log(err)
        res.status(400).json({ msg: "Some Error Occured" })
    }
}