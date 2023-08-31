import React from "react";
import {Link} from 'react-router-dom';

import './Center.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import hollow from './images/hollow.png';
import solid from './images/solid.png';
import pipe1 from './images/pipe1.png';
import paver from './images/paver.jpg';
import aac from './images/aac.jpg';
import s1 from './images/s2.png';
import s3 from './images/s3.png';
import s5 from './images/s5.png';
import s7 from './images/s7.png';
import {FaBlackTie} from 'react-icons/fa';
import {FaHome} from 'react-icons/fa';
import {BsBoxFill} from 'react-icons/bs';
import {BsBuildingCheck} from 'react-icons/bs';

import { CCard,CCardImage,CCardBody,CCardText } from "@coreui/react";

function Center() {

    return(
        < div style={{backgroundColor: '#D8C3A5'}}>
        <h1 className="h1"> PRODUCTS </h1>
        <hr className="hr" />
        <p className="P"> When it comes to Quality and Value, THB affords a balanced equation like no other.
Simply because we believe that lasting quality at an affordable price is essential to our customers.</p>
        
        
        { <div style={{display:'flex',justifyContent:"center",backgroundColor:"#D8C3A5"}}>
         <Link to="/Product" style={{textDecoration:'none'}}> 
        <CCard style={{ width: '18rem' ,backgroundColor:"#D8C3A5",margin:"2rem",cursor:'pointer',border:'transparent'}}>
          
  <CCardImage orientation="top" src={hollow}>
     
    </CCardImage>

  <CCardBody>
    <CCardText style={{alignContent:'center',textAlign:"center",fontSize:'25px',fontWeight:'500',color:'#E85A4F'}}>
        HOLLOW BLOCKS
    </CCardText>
  </CCardBody>
</CCard>
</Link>
<Link to="/Product" style={{textDecoration:'none'}}> 
<CCard style={{ width: '18rem' ,backgroundColor:"#D8C3A5",margin:"2rem",cursor:'pointer',border:'transparent'}}>
  <CCardImage orientation="top" src={solid}>
     
    </CCardImage>
    
  <CCardBody>
    <CCardText style={{alignContent:'center',textAlign:"center",fontSize:'25px',fontWeight:'500',color:'#E85A4F'}}>
        SOLID BLOCKS
    </CCardText>
  </CCardBody>
</CCard>
</Link>
<Link to="/Product" style={{textDecoration:'none'}}> 
<CCard style={{ width: '18rem',backgroundColor:"#D8C3A5",margin:"2rem",cursor:'pointer',border:'transparent' }}>
  <CCardImage orientation="top" src={pipe1} style={{height:'285px',width:'100%'}}>
     
    </CCardImage>
  <CCardBody>
    <CCardText style={{alignContent:'center',textAlign:"center",fontSize:'25px',fontWeight:'500',color:'#E85A4F'}}>
        NP2 NP3 PIPES
    </CCardText>
  </CCardBody>
</CCard>
</Link>
</div>}
{<div style={{display:'flex',justifyContent:"center",backgroundColor:"#D8C3A5"}}> 
<Link to="/Product" style={{textDecoration:'none'}}> 

<CCard style={{ width: '18rem' ,backgroundColor:"#D8C3A5",margin:"2rem",cursor:'pointer',border:'transparent'}}>
  <CCardImage orientation="top" src={paver}>
     
    </CCardImage>
  <CCardBody>
    <CCardText style={{alignContent:'center',textAlign:"center",fontSize:'25px',fontWeight:'500',color:'#E85A4F'}}>
        PAVER BLOCKS
    </CCardText>
  </CCardBody>
</CCard>
</Link>
<Link to="/Product" style={{textDecoration:'none'}}> 

<CCard style={{ width: '18rem' ,backgroundColor:"#D8C3A5",margin:"2rem",cursor:'pointer',border:'transparent'}}>
  <CCardImage orientation="top" src={aac} style={{height:"285px"}}>
     
    </CCardImage>
  <CCardBody>
    <CCardText style={{alignContent:'center',textAlign:"center",fontSize:'25px',fontWeight:'500',color:'#E85A4F'}}>
        AAC BLOCKS
    </CCardText>
  </CCardBody>
</CCard>
</Link>

</div> }

{<div>
    <div style={{display:"flex",textAlign:"center",alignItems:"center",justifyContent:"center",marginLeft:"50px",gap:"50px"}} >
      <CCard style={{backgroundColor:"#D8C3A5",border:"transparent",alignItems:"center"}}>
      <FaHome className="icon1"/>
      <CCardText className="text1">113,056</CCardText>
      <CCardText className="text"> HAPPY  CUSTOMERS  IN THE SEGMENT</CCardText>
      </CCard >
      <CCard style={{backgroundColor:"#D8C3A5",border:"transparent",alignItems:"center"}}>
      <FaBlackTie className="icon1"/>
      <CCardText className="text1">150,000</CCardText>
      <CCardText className="text">SATISFIED CUSTOMERS IN THE CORPORATE & GROUP HOUSING SECTOR</CCardText>
      </CCard>
      <CCard style={{backgroundColor:"#D8C3A5",border:"transparent",alignItems:"center"}}>
      <BsBoxFill className="icon1"/>
      <CCardText className="text1">100,000</CCardText>
      <CCardText className="text">CONCRETE BLOCKS PRODUCED EVERYDAY</CCardText>
    </CCard>
    <CCard style={{backgroundColor:"#D8C3A5",border:"transparent",alignItems:"center"}}>
      <BsBuildingCheck className="icon1"> </BsBuildingCheck>
      <CCardText className="text1">10</CCardText>
      <CCardText className="text">HIGH TECH BUILDINGS EQUIPPED WITH THE STATE OF ART FACILITIES</CCardText>
    </CCard>
    </div>
    </div>
  
}
<br/>
  <div className="special">
    <div className="specialist">
      <h3>Specialists in Modern Construction
</h3>
 
    <hr className="hr1" />
    <h5>Only THB combines hi-tech features with superior strength, to offer the cellular block,
</h5>
<h5>which are designed on state-of-the-art lines, using computerized technology, and formed on exclusively imported machinery.
</h5><br/>
<div className="spl">
<div className="flip-card" >
  <div className="flip-card-inner">
    <div className="flip-card-front">
      
      <img src={s1} style={{height:'70px',width:'85px',padding:'5px'}} />
      
      <br/>
      <h3>HOME OWNERS</h3>
      <h4>Building your own Home? Trust in us to lay down a strong foundation.
      </h4>   </div>
    <div className="flip-card-back">
      <h3>BUILD YOUR OWN </h3><h4> 1,00,000 homes stand strong with THB Concrete Blocks</h4>
        </div>
  </div>
</div>

<div className="flip-card" >
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={s3} style={{height:'70px',width:'85px',padding:'5px'}} />
      <br/>
      <h3> ARCHITECTS </h3>
      <h4>Impress your clients with visually appealing structures,built with blocks that aid your design
      </h4>   </div>
    <div className="flip-card-back">
      <h3>BLOCKS THAT AID DESIGN </h3><h4>Blocks built to cater to every design and innovation. Stay creative with THB.
      </h4> </div>
  </div>
</div>

<div className="flip-card" >
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={s5} style={{height:'70px',width:'85px',padding:'5px'}} />
      <br/>
      
      <h3>CONTRACTORS
      </h3><h4>Concrete blocks that facilitate ease in electric conduiting and plumbing work.</h4>   </div>
    <div className="flip-card-back">
      <h3>GROW WITH TRUST
      </h3> <h4>45 years in the concrete blocks business. That's what our concrete blocks  are made of.</h4> </div>
  </div>
</div>

<div className="flip-card" >
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={s7} style={{height:'70px',width:'85px',padding:'5px'}} />
      <br/>
      
      <h3>BUILDERS
      </h3><h4>1,00,000 blocks produced each day for all your construction purposes.Build with the best.</h4>   </div>
    <div className="flip-card-back">
      <h3>BUILD STRONG FOUNDATIONS
      </h3>  <h4>THB is trusted with an array of satisfied clients. Be a part of the journey.</h4></div>
  </div>
</div>
</div>
    </div>
  </div>
</div>);
}


export default Center;