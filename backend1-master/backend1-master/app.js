const express=require('express')
const mongoose=require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')
const url='mongodb://127.0.0.1/alien'
const app=express()
app.use(cors());


mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection

con.on('open',function()
{
    console.log('connected')
})

app.use(express.json())
const alienrouter=require('./router/Alien')
app.use(alienrouter)
app.listen(9000,()=>
{
    console.log('server started')
})


