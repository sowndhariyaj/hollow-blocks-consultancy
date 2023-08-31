import React from 'react';
import product from './Product';
import {Row,Col,ListGroup,Button,Image, ListGroupItem} from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import axios, * as others from 'axios';
import Navbar from './Navbar';

const Singlepro=({product})=>
{
  const { id } = useParams();
 const detail=product?.find((p)=>
   p._id===(id))
//   const [product,setproduct]=useState([]);
//   const customConfig = {
//       headers: {
//       'Content-Type': 'application/json'
//       }
//   };
// const display=async()=>
//   {
//     try{
//     const response = await axios.get('http://localhost:9000', customConfig);
//       setproduct(response.data);
//       console.log(product);
//     }
//     catch(error){
//       console.error(error);
//     };
//   }
//   display();
//   const { id } = useParams();
//   const detail=product.find((p)=>
//   p._id===(id))
  
  const [quantity,setquantity]=useState(0);
  const[open,setopen]=useState(false);

const handleaddproduct=(detail)=>
{
  setopen(true);
}

  const body=
  {
        name:detail.name,
        price:detail.price,
       quantity:quantity,
       image:detail.image,

  }
  const customConfig = {
      headers: {
      'Content-Type': 'application/json'
      }
  };
  const handle=(e)=>
  {
    e.preventDefault();
   axios.post('http://localhost:9000/cart', body, customConfig)
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
          <Row style={{display:'flex',margin:'50px',alignItems:'center'}}>
              <Col md={6} >
             <Image src={detail.image}/>
            </Col> 
            <Col md={6} style={{alignItems:'center',textAlign:'center'}}>
                <ListGroup varient='flush' style={{padding:'50px'}}>
                    <ListGroupItem>
                   <h1>{detail.name}</h1>
                    </ListGroupItem>
                    <ListGroupItem style={{textAlign:'justify'}}>
                   <h4>{detail.detail}</h4>
                    </ListGroupItem>
                    <ListGroupItem>
                 <h1> Rs:{detail.price}</h1>
                   </ListGroupItem>

                  <ListGroupItem>
                  <button  onClick={handleaddproduct} style={{backgroundColor:' #ffd480',color:' #000080'}}><h3>Add to cart</h3></button>
                 </ListGroupItem>

                </ListGroup>
            </Col>
            <Col></Col>

          </Row>
           {
            open?<div style={{textAlign:'center'}}>
            
            <label><h2 style={{paddingRight:"20px",color:"blue"}}>Enter the Quantity</h2></label>
            <input onChange={(e)=>setquantity(e.target.value)} value={quantity}></input>
            <br></br>

            <button onClick={(e)=>handle(e)} style={{alignItems:'center',color:"red",backgroundColor:"transparent",fontWeight:"900",border:"none"}}>SUBMIT</button>
            <br></br>

          </div>:""
          } 
        </div>
    )
}
export default Singlepro;