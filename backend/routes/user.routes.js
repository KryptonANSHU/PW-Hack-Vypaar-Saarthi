const { apply, getUser } = require("../controllers/user.controller")
const { verifyUser } = require("../middlewares/verifyUser")

const router = require("express").Router()

router.get("/",verifyUser,getUser)
router.post("/apply",verifyUser,apply)
router.post("/banks")

module.exports = router

