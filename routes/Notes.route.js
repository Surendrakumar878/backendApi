const express=require("express")
const {NoteModel}=require("../models/notes.model")
const notesRouter=express.Router()
//for all the following things authentication is required.
notesRouter.get("/", async(req,res)=>{
    const userId = req.headers.authorization.split(" ")[0];
    const task = await NoteModel.find();
    //   console.log(task);
    res.send(task);
// res.send({"mgs":"note"})
})
notesRouter.post("/create", async (req,res)=>{
const payload=req.body
const new_note=new NoteModel(payload)
await new_note.save()
res.send({"msg":"Note Created"})
})
notesRouter.patch("/update/:noteID", async(req,res)=>{
    const payload=req.body;
    const ID=req.params.noteID;
    console.log(ID)
    try{
        await NoteModel.findByIdAndUpdate({_id:ID},payload)
        // await new_note.save()
        res.send({"msg":"updated data successfully"})
    
    }catch(err){
       
    }
//logic to update the notes
})
notesRouter.delete("/delete/:noteID", async(req,res)=>{
    const ID=req.params.noteID;
    try{
        await NoteModel.findByIdAndDelete({_id:ID})
        res.send({"msg":"deleted data successfully"})
    
    }catch(err){
        console.log(err);
        res.send({"msg":"someting went wrong,pls try again later"})
    }
//logic to delete the notes
})
module.exports={
notesRouter
}
