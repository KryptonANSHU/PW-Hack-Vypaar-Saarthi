const jwt = require("jsonwebtoken")
require("dotenv").config()


exports.verifyUser = async (req,res,next) => {
    const token = req.headers["x-access-token"]
    if(!token) return res.status(401).json({msg:"Unauthoried",success:false}) 
    jwt.verify(token, process.env.JWT_SECRET, (err,decoded)=>{
        if(err) {
            console.log(err)
            return res.status(401).json({err})
        }
        req.user = decoded.user.id
        next()
    })
}