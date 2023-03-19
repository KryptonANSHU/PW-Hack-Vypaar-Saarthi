const loginModel = require("../models/login.model");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.createnew = async (req, res) => {
    try {
        const { name, password, email } = req.body
        const existingUser = await loginModel.findOne({ email })
        if (existingUser) return res.status(401).json({ color: 'red', msg: "User already exists", success: false });
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);

        await loginModel.create(
            {
                name,
                email,
                password: hashedPass
            }
        )
        res.status(200).json({ color: "green", msg: "User Created Successfully", success: true });
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ msg: err, success: false })
    }
}

exports.login = async (req, res) => {

    try {
        if (req.body.password) {
            const searchUser = await loginModel.findOne({ email: req.body.email })
            if (!searchUser) {
                return res.status(403).json({ success: false, msg: "User does not exist" })
            }
            const hash = searchUser.password
            const match = await bcrypt.compare(req.body.password, hash)
            if (!match) return res.status(401).json({ msg: "Wrong Password", success: false })
            const data = {
                user: {
                    id: searchUser._id,
                    type: searchUser.type || 'user'
                }
            }
            const authToken = jwt.sign(data, process.env.JWT_SECRET);
            res.status(200).json({ authToken, success: true });
            return;
        }
        res.status(500).json({ color: "red", msg: "Enter Password", success: false });

    }
    catch (err) {
        console.log(err)
        res.status(500).json({ color: "red", err: "Some Error occuerd" })
    }
}



