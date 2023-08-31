const express=require('express')
const router=express.Router()
const  Alien=require('../model/all')
const report=require("../model/report")
const carts=require('../model/cart')
const collection=require('../model/signup')
const feed = require('../model/feedback')
 router.get('/',async(req,res)=>
{
  try{
       const alien = await Alien.find()
       res.json(alien)
 }
 catch(err){
     res.send('ERROR'+err)
 }
})
router.get('/get',async(req,res)=>
{
  try{
       const cart = await carts.find()
       res.json(cart)
 }
 catch(err){
     res.send('ERROR'+err)
 }
})
router.get('/reportfeed',async(req,res)=>
{
  try{
       const alien = await feed.find()
       res.json(alien)
 }
 catch(err){
     res.send('ERROR'+err)
 }
})
router.get('/aliens/:id',async(req,res)=>
{
  try{
       const alien = await Alien.findById(req.params.id)
       res.json(alien)
 }
 catch(err){
     res.send('no data is found with that id')
 }
})
router.get('/report',async(req,res)=>
{
  try{
       const alien = await report.find()
       res.json(alien)
 }
 catch(err){
     res.send('no data is found with that id')
 }
})
router.get('/reportlogin',async(req,res)=>
{
  try{
       const alien = await collection.find()
       res.json(alien)
 }
 catch(err){
     res.send('no data is found with that id')
 }
})

router.post("/",async(req,res)=>{
  const{email,password}=req.body

  try{
     const check=await collection.findOne({email:email,password:password})

     if(check){
      res.json("exist")
     }
     else{
      res.json("notexist")
     }
  }

  catch(e){
      res.json("notexist")

  }


})







router.post('/aliens',async(req,res)=>
{
  const name = req.body.name;
  const price = req.body.price;
    const description = req.body.description;
    const detail=req.body.detail;
    const image=req.body.image;
     const a=new Alien({
      name: name,
      price:price,
      image:image,
     description:description,
    detail:detail
    })
    try{
        const a1=await a.save()
        res.json(a1);
    }
    catch(err){
       res.send('error'+err)
      }

})
router.post('/feed',async(req,res)=>
{
  const name = req.body.name;
  const email = req.body.email;
  const feedback = req.body.feedback;

     const a=new feed({
      name: name,
      email:email,
      feedback:feedback,

    })
    try{
        const a1=await a.save()
        res.json(a1);
    }
    catch(err){
       res.send('error'+err)
      }

})
router.post('/report',async(req,res)=>
{
  const name = req.body.name;
  const phone = req.body.phone;
    const email = req.body.email;
     const a=new report({
      name: name,
      phone:phone,
      email:email
    })
    try{
        const a1=await a.save()
        res.json(a1);
    }
    catch(err){
       res.send('error'+err)
      }

})

router.post("/Signup",async(req,res)=>{
  const{email,password}=req.body

  const data={
      email:email,
      password:password
  }

  try{
     const check=await collection.findOne({email:email})

     if(check){
      res.json("exist")
     }
     else{
      res.json("notexist")
      await collection.insertMany([data])
     }
  }

  catch(e){
      res.json("notexist")

  }

})
router.post('/cart',async(req,res)=>
{
  const name = req.body.name;
  const price = req.body.price;
    const quantity=req.body.quantity;
    const image=req.body.image;
     const b=new carts({
      name: name,
      price:price,
      quantity:quantity,
      image:image
    })
    try{
        const a1=await b.save()
        res.json(a1);
    }
    catch(err){
       res.send('error'+err)
      }

})
router.delete('/cart/:id', async (req, res) => {
  const itemId = req.params.id;

  try {
    // Use the Mongoose Model to find and delete the item by ID
    const deletedItem = await carts.findOneAndDelete({ _id: itemId });

    if (deletedItem) {
      console.log('Item deleted successfully');
      res.status(200).json({ message: 'Item deleted successfully' });
    } else {
      console.log('Item not found');
      res.status(404).json({ error: 'Item not found' });
    }
  } catch (err) {
    console.log('Error deleting item:', err);
    res.status(500).json({ error: 'Failed to delete item' });
  }
});

router.delete('/del/:id', async (req, res) => {
  const itemId = req.params.id;
  console.log(itemId)
  try {
    // Use the Mongoose Model to find and delete the item by ID
    const deletedItem = await Alien.findByIdAndDelete(itemId);
     console.log(deletedItem);
    if (deletedItem) {
      console.log('Item deleted successfully');
      res.status(200).json({ message: 'Item deleted successfully' });
    } else {
      console.log('Item not found');
      res.status(404).json({ error: 'Item not found' });
    }
  } catch (err) {
    console.log('Error deleting item:', err);
    res.status(500).json({ error: 'Failed to delete item' });
  }
});

// router.delete('/cart/:id', (req, res) => {
//   const itemId = req.params.id;

//   // Use the Mongoose Model to delete the item by ID
//   carts.findByIdAndRemove(itemId, (err) => {
//     if (err) {
//       console.log('Error deleting item:', err);
//       res.status(500).json({ error: 'Failed to delete item' });
//     } else {
//       console.log('Item deleted successfully');
//       res.status(200).json({ message: 'Item deleted successfully' });
//     }
//   });
// });

router.patch('/aliens/:id',async(req,res)=>
{
  try{
        const alien = await aliens.findById(req.params.id)
        alien.sub=req.body.sub;
        const a1=await alien.save()
        res.json(a1)
  }
  catch(err)
  {
    res.send('error')
  }
})
module.exports= router
