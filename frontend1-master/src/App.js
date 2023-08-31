/*import React, { useEffect, useState } from 'react'
import Axios from "axios";
const App =() => {
  const [data,setData]=useState("");

  const getData=async()=>{
    const response=await Axios.get("http://localhost:8000/getData");
    setData(response.data);
  }

  useEffect(()=>{
    getData()
  },[]);

  return (
    <div>{data}</div>
  )
}

export default App*/
import React ,{useEffect,useState} from 'react';
import Login from "./Login"
import Signup from "./Signup"
import About from "./About"
import App1 from "./App1";
import Feedback from "./Feedback";
import Contact from './Contact';
import Product from './Product';
import Admin from './Admin';
import Singlepro from './Singlepro';
import Cart from './Cart';
import axios from "axios";
import Adminhome from './Adminhome';
import Adminlogin from './Adminlogin';
import Admindis from './Admindis';
import Description from './Description';
import Intro from './Intro';
import Report from './Report';
import Mapnew from './Mapnew';
import {Auth} from './Auth';
import Required from './Required';
import Reporthome from './Reporthome';
import Reportlogin from'./Reportlogin';
import Reportfeed from './Reportfeed';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App(){
  const [product,setproduct]=useState([]);
  const [cartItems,setcartItems]=useState([]);
    useEffect(() => {
    display();
    displaycart();
    console.log(cartItems);
   }, []);
const customConfig = {
    headers: {
    'Content-Type': 'application/json'
    }
};
let flag=false;  
const display=()=>
{

axios.get('http://localhost:9000')
.then(response => {
    setproduct(response.data);
  })
  .catch(error => {
    console.error(error);
  });


}
const displaycart=()=>
{

axios.get('http://localhost:9000/get')
.then(response => {
    setcartItems(response.data);
  })
  .catch(error => {
    console.error(error);
  });


}

  return(
      <Router>
        <Auth>
        <Routes>
          <Route path="/" element={<App1/>}/>
          <Route path="/report" element={<Report/>}/>
          <Route path="/Product" element={<Product product={product}/>}/>
          <Route path="/detail/:id" element={<Singlepro product={product}/>}/>
          <Route path="/Admin" element={<Adminlogin/>}/>
          <Route path="/success" element={<Adminhome/>}/>
          <Route path="/add" element={<Admin/>}/>
          <Route path="/admindis" element={<Admindis product={product}/>}/>
           <Route path="/description/:id" element={<Description product={product}/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/feedback" element={<Required><Feedback/> </Required>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/intro" element={<Intro/>}/>
           <Route  path="/Contact" element={<Contact />}/>
          <Route path="/hell" element={<Mapnew/>}/>
          <Route  path="/quotation" element={<Cart cartItems={cartItems}/>}/>
          <Route path="/Reporthome" element={<Reporthome/>}/>
          <Route path="/Reportfeed" element={<Reportfeed/>}/>
          <Route path="/Reportlogin" element={<Reportlogin/>}/>
        </Routes>
        </Auth>
      </Router>
 
  );
}
export default App;