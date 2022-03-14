const express=require("express")
const mongoose=require("mongoose")

const app=express();
app.use(express.json())
const connectDb=()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/test");
}
//user schema
const userSchema=new mongoose.Schema(
    {
        first_name:{type:String,required:true},
        middle_name:{type:String,required:false},
        last_name:{type:String,required:true},
        age:{type:Number,required:true},
        email:{type:String,required:true},
        address:{type:String,required:true},
        gender:{type:String,required:true},
    },
    {
        versionKey:false,
        timeStamps:true,
    }
)

const user=mongoose.model("user",userSchema);

const postSchema =new mongoose.Schema(
    {
        title:{type:String,required:true},
        body:{type:String,required:true},
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true,
        }
    }
)
app.listen(3789,async()=>{
    try{
        await connectDb()
        
    }
    catch(err){
        console.log("err")
    }
    console.log("listening 3789")
})