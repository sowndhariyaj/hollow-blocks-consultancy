import React from 'react';
import { useState } from 'react';
//const fetch = require('node-fetch');
import axios, * as others from 'axios';
import Navbar from './Navbar';

//const axios = require('axios');

function Admin(){
    const [name,setname]=useState("");
    const [price,setprice]=useState("");
    const [description,setdescription]=useState("");
    const [detail,setdetail]=useState("");
    const [image,setimage]=useState("");
    const body=
    {
        name: name,
          price:price,
         description:description,
        detail:detail,
        image:image
    }
    console.log(body)
    const customConfig = {
        headers: {
        'Content-Type': 'application/json'
        }
    };
   const handle=(e)=>
   {
    e.preventDefault();
    axios.post('http://localhost:9000/aliens', body, customConfig)
    .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
     console.log('form submitted');
  }
    return(
        <div>
            <Navbar/>
            <form onSubmit={(e)=>handle(e)} style={{padding:"5%",border:'2px solid black',marginTop:'5%',marginRight:'30%',marginLeft:'30%',alignItems:"center",alignContent:'center',textAlign:'center'}}>
                <input type='text' value={name} onChange={(e)=>{setname(e.target.value)}} placeholder='PRODUCT NAME'></input>
                <br></br>
                <br></br>
                <input  type='text' value={price} onChange={(e)=>{setprice(e.target.value)  }}placeholder='PRICE'></input>
                <br></br>
                <br></br>

                <input  type='text' value={image} onChange={(e)=>{setimage(e.target.value) }} placeholder='IMAGE URL'></input>
                <br></br>
                <br></br>

                <input type='textarea'value={description} onChange={(e)=>{setdescription(e.target.value)}} placeholder='PRODUCT DESCRIPTION'></input>
                <br></br>
                <br></br>
                <input  type='textarea' value={detail} onChange={(e)=>{setdetail(e.target.value)}} placeholder='DETAILED DESCRIPTION'></input>
                <br></br>
                <br></br>

                 <button type='submit'style={{backgroundColor:"#E85A4F",color:"#D8C3A5",border:"none"}}>SUBMIT</button>
                 <br></br>

            </form>
        </div>
    )
}
export default Admin;
