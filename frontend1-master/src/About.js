import React from 'react';
import "./About.css";
import { motion } from "framer-motion";
import Navbar from './Navbar';
function About() {
    return (
        
      <div className="about">
        <Navbar />
        <div className='about1'>
        <div className="navbar" style={{alignItems:"center",justifyContent:"center",backgroundColor:"#EAE7DC",color:"red"}}><h1 >About us</h1></div>
       <div className="history" style={{textDecoration:"none",fontFamily:"Times New Roman",fontWeight:"normal"}}>
         <motion.img 
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 0.5}}
         src="hollow1.jpg"/>
        <motion.div className="text1" 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 1 }}
        ><h2 style={{color:"brown"}}>History</h2>
             <div ><h5>
            Established in 1989, TAMILNADU HOLLOW BLOCKS is a flagship company of the $2.4 Billion conglomerate, CK Birla Group. The company offers comprehensive building materials and solutions for 70+ years and has achieved market leadership by developing and marketing the most sustainable and relevant products which are future-ready, high quality, and have innovation at its core.

THB has 5 major constructing materials like - hollow blocks, solid Blocks, NP2 NP3 Pipes, AAC BLOCKS and recently acquired the best concrete blocks  in the city karur,Tamilnadu. The company boasts of 21 cities-of-the-concrete materials manufacturing facilities in Tamilnadu and 2 manufacturing sites in Karur and Coimboatore. It is committed to innovation through dynamic R&D facilities in Karur and Tamilnadu. Having pioneered in green technology keeping in mind the paradigm shift to green building materials almost a decade ago THB diversified into a vast range of products that are environmentally viable and conducive. Given its strong emphasis on customer-centricity, TAMILNADU HOLLOW BLOCKS also ensures a widespread reach through an extensive sales and distribution network spread across Karur and 10+ cities  globally.

Its strengths are truly its employees, loyal dealers, and satisfied customers. With consistent efforts to grow the business sustainably, 
THB is also certified as Great Place to Work ® for the second time in a row, Top 30 best Manufacturing companies in Tamilnadu and Mr.P
 .SAKTHIVEL, it’s MD and CEO was awarded as “The Most Promising Business Leader of Tamilnadu 
 2018 & 2019” by the Economic Times. The company also has been a recipient of the Iconic Brand
  Award, Asia’s Most Trusted Company Award, Best Company of the Year, Employer brand Award and
   has been maintaining the ‘Superbrand’ status for many years now.</h5></div></motion.div></div>
 
       <div className="vission">
       
        <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1}}
         transition={{ duration: 0.5 }}>
        <h1 style={{color:"brown"}}>VISION</h1>
       <h3> To be an innovative company where Premium-quality, low cost building materials make people’s lives better. 
            We take our role as a responsible member of society seriously and act in  accordance with economic, ecological and social principles – in order to remain successful in  the future.
            </h3></motion.div>
            <motion.img src="hollow3.png"  whileHover={{ scale: 1.2}} style={{height:"300px",paddingRight:"10px"}}/>
       </div> 
       <div className="mission">
       <motion.img  
       src="hollow2.jpg"
       whileHover={{ scale: 1.2}}style={{height:"200px"}} />
        <motion.div initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
         transition={{ duration:0.5 }}>
        <h1 style={{color:"brown"}}>Mission</h1>
        <h3>TAMILNADU HOLLOW BLOCKS is focused on building its business by leveraging on the trust earned by delivering  Premium products and services to its customer satisfaction. As a leading producer of AAC &  CONCRETE building blocks, Our goal is to create sustainable values with natural products: a  residential environment of life-long quality and safety for our customers,
        </h3> </motion.div>
      </div>
      </div>
      </div>
    );
  }
  export default About;
  
