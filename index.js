const express=require("express")
const cors=require("cors")
const {connection}=require("./config/db")
const {authenticate}=require("./middlwares/authenticate.middleware")
const {userRouter}=require("./routes/User.route");
const {notesRouter}=require("./routes/Notes.route");
const app=express()
require("dotenv").config()
app.use(cors())
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("home page")
})
app.use("/user",userRouter)
app.use(authenticate)
app.use("/note",notesRouter)



app.listen(process.env.PORT|| 8000
    , async()=>{

    await connection
    console.log("8000")
})