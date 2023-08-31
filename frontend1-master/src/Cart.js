import {Row,Col,Image} from 'react-bootstrap';
import emailjs from 'emailjs-com';
import React, { useRef,useState} from 'react';
import {AiTwotoneDelete} from 'react-icons/ai';
import Navbar from './Navbar';
import axios, * as others from 'axios';


const Cart=({cartItems})=>{
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [phone,setphone]=useState("");
    const handleDelete=(value)=>{
      console.log(value);
      axios.delete(`http://localhost:9000/cart/${value}`).then((response) => {
        console.log("RESPONSE FROM POST", response.data);
      }, (err) => {
        // this only runs on error
        console.log("Error While Posting Data", err);
      });
     }
     const body=
     {
           name:name,
           phone:phone,
           email:email
   
     }
     const customConfig = {
         headers: {
         'Content-Type': 'application/json'
         }
     };
   
    
const totalprice=cartItems.reduce((price,item)=>(price+item.quantity*item.price),0);
const sendEmail = (e) => {
      e.preventDefault();
      axios.post('http://localhost:9000/report', body, customConfig)
      .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
       console.log('form submitted');
      console.log(name );
      var lst = "";
      for(var i of cartItems){
        lst += i.name + ":" + i.price + "*" + i.quantity + "=" + i.price*i.quantity +  "\n"; 
    }
    console.log(lst);
      const sum={
         fname:name,
         mail:email,
        list:lst
      }
    emailjs.send('service_fxzz4fj', 'template_hxbpnbv',sum, 'FgrKfeSjara6IwdYo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log("error" , error.text);
      });
  };
  
return (
    <div className='cart-items'>
        <Navbar/>
    <br></br>
    <div className='cart-items-header' style={{alignItems:'center',textAlign:'center'}}><h4>Products in the Cart</h4></div>
   {cartItems.length===0 &&(
        <div className='cart-items-empty' style={{textAlign:"center"}}><h1>no items are added</h1></div>
    )}
    <div >
        {cartItems.map((items)=>(
         <div key={items.id} className='cart-items-list' style={{display:'flex',marginBottom:"50px",marginTop:"50px",alignItems:'center',justifyContent:'space-evenly'}}>
           <img src={items.image} alt={items.name} style={{height:"150px",width:"200px"}}/>
           <div>{items.name}</div>
           <div>{items.quantity}* Rs{items.price}</div>
           <div>{items.quantity*items.price}</div>
           <div><AiTwotoneDelete onClick={()=>handleDelete(items._id)}/></div>
    </div>
        ))}
    </div> 
    <div style={{display:'flex',textAlign:'center',marginLeft:'50%'}}>Total
            <div>Rs:{totalprice}</div>
           </div>
        <form style={{marginTop:'100px',alignItems:'center',border:'transparent',marginLeft:'30%',marginRight:'30%',textAlign:'center',padding:'5%'}}>
          <label style={{color:"brown"}}><h3 style={{padding:"10px"}}> Name </h3></label>
            <input type='text' onChange={(e)=>setname(e.target.value)} value={name}></input>
            <br></br>
            <br></br>

            <label style={{color:"brown"}}>  <h3 style={{padding:"10px"}} >Email</h3></label>
            <input type='email' onChange={(e)=>setemail(e.target.value)} value={email}></input>
            <br></br>
            <br></br>
            <input type='text' onChange={(e)=>setphone(e.target.value)} value={phone}></input>

            <button onClick={(e)=>sendEmail(e) } style={{border:"none"}}>Get Quote</button>
            <br></br>
            <br></br>

        </form> 
    </div>
);
};
export default Cart;