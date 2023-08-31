const mongoose=require('mongoose')

const cartschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:
    {
        type:String,
        required:true
    },
    quantity:
    {
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('carts',cartschema)