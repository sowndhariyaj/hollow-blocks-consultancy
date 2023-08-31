import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Adminhome from './Adminhome';
import Navbar from './Navbar';

function Adminlogin()
{
    const [name,setname]=useState("");
    const [password,setPassword]=useState("");
    const [open,setopen]=useState(false);
    const handle=(e)=>
    {
        if(name=="saumya" && password=="hello@123")
        {
            setopen(true);
        }
        else
        window.alert("wrong user name or password");
    }
    return(
      <div  >
                <Navbar/>
             {/* <div style={{
        height:"200px",
        width:"500px",
        position: "absolute",
        top:"0",
        bottom: "0",
        left: "0",
        right: "0",
        margin: "auto",
        border:"2px solid black",
        alignItems:"center",
        textAlign:"center",
        paddingTop:"100px",
        paddingBottom:"300px",
        paddingLeft:"50px",
        paddingRight:"50px"
    
      }}>
               </div> */}
  
        {
            open?<div style={{
                height:"200px",
                width:"500px",
                position: "absolute",
                top:"0",
                bottom: "0",
                left: "0",
                right: "0",
                margin: "auto",
                border:"2px solid transparent",
                alignItems:"center",
                textAlign:"center",
                paddingTop:"100px",
                paddingBottom:"300px",
                paddingLeft:"50px",
                paddingRight:"50px"}}>
            <div><h4>SUCCESSFULLY LOGGEDIN</h4></div>
            <br></br>
            <button style={{backgroundColor:"#E85A4F",border:"none"}}><Link to="/success" style={{textDecoration:"none",color:"#D8C3A5"}} >GO TO ADMIN PAGE</Link></button>
          </div>:<div style={{
        height:"200px",
        width:"500px",
        position: "absolute",
        top:"0",
        bottom: "0",
        left: "0",
        right: "0",
        margin: "auto",
        border:"2px solid transparent",
        alignItems:"center",
        textAlign:"center",
        paddingTop:"100px",
        paddingBottom:"300px",
        paddingLeft:"50px",
        paddingRight:"50px",
        backgroundColor:"grey"}}>
        <h1 style={{color:"brown",paddingBottom:"30px"}}>ADMIN LOGIN</h1>
           <input onChange={(e)=>setname(e.target.value)}value={name} placeholder="Name" style={{width:"300px",height:"30px"}}></input>
            <br></br>
            <br></br>
           <input  onChange={(e)=>setPassword(e.target.value)}value={password} placeholder='Password' style={{width:"300px",height:"30px"}}></input>
           <br></br>
           <br></br>
            <Button style={{backgroundColor:"#E85A4F",border:"none",color:"WHITE"}}type="submit" onClick={(e)=>handle(e)}>SUBMIT</Button>
        </div>}
        </div>
    );
}
export default Adminlogin;