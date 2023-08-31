import React, {useEffect,useState} from "react" //useEffect
import  axios from "axios"
import "./Feedback.css"
import {IoMdContact} from "react-icons/io"
import Navbar from './Navbar'
import emailjs from 'emailjs-com'
import {FiMail} from  "react-icons/fi"
import {RiLockPasswordLine} from "react-icons/ri"

import { useNavigate ,Link } from "react-router-dom"
function Feedback() 
{
    const [name,setname]=useState("");
    const [feedback,setfeedback]=useState("");
    const [email,setemail]=useState("");
    const history=useNavigate();
    const params={
        name:name,
        email:email,
        feedback:feedback
    };
    const customConfig = {
        headers: {
        'Content-Type': 'application/json'
        }
    };
  
    const SendMail=(e)=>
    {
        e.preventDefault();
        axios.post('http://localhost:9000/feed', params, customConfig)
        .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
    console.log(params);
    const serviceID="service_r2yu5d9";
    const templateID="template_uiw6w0b";
    
    emailjs.send(serviceID,templateID,params,"gGtG4S5tizbOv6Adz")
      .then((res)=>{
        //console.log(res);
        alert("Your message sent successfully");
    
      })
      .catch((err)=>console.log(err));
    } 
    
    
    
    
   
    return(
        <div>
        <Navbar /> 

        <div className="main">
        <div className="sub-main">
        <div className="login" >
            <div>
            <div className="img">
                <div className="container-image">
                       <IoMdContact size={250}/>
                  </div>
            </div>
            <h1>Feedback</h1>
           <br></br>
            <form >
                <div className="wrapper">
                <div>
                <input className="input"  style={{height:"50px"}} onChange={(e)=>{setname(e.target.value)}} placeholder="name" value={name}/>
                </div>
                <br></br>
                <div>
                <input className="input" style={{height:"50px"}} onChange={(e)=>{setemail(e.target.value)}} placeholder="email" value={email}/>
                </div>
                <br></br>
               <div className="wrapper">
                <input  style={{height:"50px"}}className="input" type="text" onChange={(e)=>{setfeedback(e.target.value)}} placeholder="Type your feedback" value={feedback}/>
                </div>
                <br></br>
                <input className="button" type="submit" onClick={(e)=>SendMail(e)} />
             <br/>
             </div>
            </form>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Feedback;