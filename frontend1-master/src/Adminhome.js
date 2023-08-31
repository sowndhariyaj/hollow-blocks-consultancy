import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

function Adminhome()
{
    return(
   <div>
    <Navbar/>
    <div style={{
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
         paddingLeft:"150px",
         paddingRight:"50px"
    }}>
    <div style={{backgroundColor:"#E85A4F",padding:"20px",width:"200px"}}><Link to="/add" style = {{textDecoration:"none",color:"#D8C3A5"}}>Add product</Link></div>
    <br></br>
    <div style={{backgroundColor:"#E85A4F",padding:"20px",width:"200px"}}><Link to="/admindis" style = {{textDecoration:"none",color:"#D8C3A5"}}>display product</Link></div>
    <br></br>

    <div style={{backgroundColor:"#E85A4F",padding:"20px",width:"200px"}}><Link to="/admindis" style = {{textDecoration:"none",color:"#D8C3A5"}}>delete product</Link></div>
    <br></br>
    <div style={{backgroundColor:"#E85A4F",padding:"20px",width:"200px"}}><Link to="/reporthome" style = {{textDecoration:"none",color:"#D8C3A5"}}>see user details</Link></div>

    </div>
   </div>
    );
}
export default Adminhome;