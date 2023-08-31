import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import './Intro.css';
function Intro()
{
    return(
        <div >
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
                    // border:"2px solid black",
                    alignItems:"center",
                    textAlign:"center",
                    paddingTop:"100px",
                    paddingBottom:"300px",
                    paddingLeft:"150px",
                    
                
            }}>
                
          <div  style={{backgroundColor:"#E85A4F",padding:"20px",width:"300px",alignItems:"center",border:"2px solid transparent",borderRadius:"50%"}}
          ><Link to="/Login" style = {{textDecoration:"none",color:"#D8C3A5"}}><h4>Login as User</h4></Link></div>
          <br></br>
          <div style={{backgroundColor:"#E85A4F",padding:"20px",width:"300px",border:"2px solid transparent ",borderRadius:"50%"}}><Link to="/Admin" style = {{textDecoration:"none",color:"#D8C3A5"}}><h4>Login as Admin</h4> </Link></div>
          </div></div>
        
    );
}
export default Intro;