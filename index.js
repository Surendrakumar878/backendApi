const express=require("express")
const cors=require("cors")
const {connection}=require("./config/db")
const {authenticate}=require("./middlwares/authenticate.middleware")
const {userRouter}=require("./routes/User.route");
const {notesRouter}=require("./routes/Notes.route");
const app=express()
app.use(cors())
app.use(express.json())
app.use("/user",userRouter)
app.use(authenticate)
app.use("/note",notesRouter)
app.get("/",(req,res)=>{
    res.send("home page")
})


app.listen(8000, async()=>{

    await connection
    console.log("8000")
})