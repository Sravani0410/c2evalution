const express=require("express")
const mongoose=require("mongoose")

const app=express()

app.listen(3789,async()=>{
    try{
        await connectDb()
        
    }
    catch(err){
        console.log("err")
    }
    console.log("listening 3789")
})