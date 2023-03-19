const express = require("express")
const { createnew, login } = require("../controllers/auth.controller")
const router = express.Router()

router.post('/createuser',createnew)
router.post('/login',login)
router.post('/deleteuser')

module.exports = router