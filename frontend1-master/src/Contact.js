import React from "react";
import {ImLocation} from "react-icons/im"
import {FaPhoneAlt} from "react-icons/fa";
import {SiGmail} from "react-icons/si";
import {IoTime} from "react-icons/io5";
import './Contact.css';
//import Mapnew from './Mapnew';
function Contact(){
    return(
        <div>
        <footer>
            <nav>       <div  className="contact" style={{backgroundColor : '#D8C3A5', color:'',paddingBottom:'10px',margin:"0px"}} >
            <h3 className="top" style={{marginLeft: '0.5rem',paddingTop:'10px',color:'black',fontWeight:'bold',fontSize:'25px'}}>BEGINS WITH THB ...</h3>
                <p style={{marginLeft: '1.0rem',fontWeight:'bold',fontSize:'23px'}}><ImLocation style={{color:'#E98074'}}/>   No.237/1,VALLIPURAM PIRIVU, KOVAI MAIN ROAD, KARUDAYAMPALAYAM, KARUR, TAMILNADU, INDIA.</p><p> </p>
                <p style={{marginLeft: '1.0rem',fontWeight:'bold',fontSize:'23px'}}><FaPhoneAlt style={{color:'#E98074'}}/>  +91 9790032259 , 9442532259  </p>
                <p style={{marginLeft: '1.0rem',fontWeight:'bold',fontSize:'23px'}}><SiGmail style={{color:'#E98074'}} />     tamilnaduthb@gmail.com </p>
                <p style={{marginLeft: '1.0rem',fontWeight:'bold',fontSize:'23px'}}><IoTime style={{color:'#E98074',height:30,width:30}}/>  Monday - Saturday 9:00 - 7:30 </p>

        </div>
        </nav>
 
        </footer>
        </div>
    );
}

export default Contact;