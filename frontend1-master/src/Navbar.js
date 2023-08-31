import React from "react";
import './Navbar.css';
import log from './images/log1.png';
import {Link} from 'react-router-dom';
import {useCon} from './Auth';
function Navbar()
{
    const auth=useCon();
    return(
        
        <div className="navbar">
            <nav className="nav" >
                <img  className="logo" src={log} alt=" np" /> <p style={{color:'#E85A4F',backgroundColor:'#D8C3A5'}}> No.1 TAMILNADU HOLLOW BLOCKS</p>
        
            <ul className="nav-items">
            
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/About">ABOUT US</Link></li>
            <li><Link to="/product">PRODUCTS</Link></li>
            <li><Link to="/feedback">FEEDBACK</Link></li>
            <li><Link to="/quotation">QUOTATION</Link></li>

            <li><Link to="/hell">CONTACT</Link></li>
            <li className="login" onClick={()=>{auth.setflag(!auth.flag)}}>{auth.flag?<Link to="/">LOGOUT</Link>:<Link to="/intro">LOGIN</Link>}</li>
            </ul>
            </nav>
            </div>
    )
}

export default Navbar;