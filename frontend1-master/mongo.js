const mongoose=require("mongoose")
//mongoose.connect("mongodb://localhost:127.0.0.1:27017/react-login-tut")
mongoose.connect("mongodb://127.0.0.1:27017/react-login-tut",{useNewUrlParser:true})

.then(()=>{
    console.log("mongodb connected");
}).catch((e)=>
{
     console.log(e); })

const newSchema=new mongoose.Schema({
    email:{
       type:String,
       required:true 
    },
    password:{
        type:String,
        required:true
    }

})

const collection=mongoose.model("collection",newSchema)

module.exports=collection