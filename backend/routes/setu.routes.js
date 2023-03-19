const express = require("express")
const { setu } = require("../controllers/setu.controller")
const router = express.Router()

router.post('/notification',setu)
router.get('/notification',setu)

module.exports = router