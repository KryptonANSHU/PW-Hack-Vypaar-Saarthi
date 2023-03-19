const express = require("express")
const connectToDB = require("./mongoose/connect")
const app = express()
const loginRoutes = require('./routes/auth.routes')
const setuRoutes = require("./routes/setu.routes")
const userRoutes = require("./routes/user.routes")
const bankRoutes = require("./routes/bank.routes")
const cors = require("cors")

//middleware
app.use(cors({
    origin:"*",
    optionsSuccessStatus:200
}))
app.use(express.json())


//test-routes
app.get('/', (req, res) => {
    res.status(200).json({ msg: "Works" })
})

//routes
app.use('/auth',loginRoutes)
app.use('/setu',setuRoutes)
app.use('/user',userRoutes)
app.use('/bank',bankRoutes)

//init
try {
    app.listen(5000, async () => {
        console.log("Server Listening")
        await connectToDB()
    })  
} catch (error) {
    console.log("Server not started\n", err)
}
