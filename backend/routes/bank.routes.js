const express = require("express")
const { getBank, createBank, getMSME } = require("../controllers/bank.controller")
const { verifyUser } = require("../middlewares/verifyUser")
const router = express.Router()

router.post('/create',verifyUser,createBank)
router.get('/',verifyUser,getBank)
router.get('/msme',verifyUser,getMSME)


module.exports = router