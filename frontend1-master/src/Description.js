import React from 'react';
import product from './Product';
import {Row,Col,ListGroup,Button,Image, ListGroupItem} from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import axios, * as others from 'axios';
import Navbar from './Navbar';

const Description=({product})=>
{
  const { id } = useParams();

 const detail=product?.find((p)=>
   p._id===(id))

  const handleDelete=(e,value)=>{
    e.preventDefault();
    console.log(value);
    axios.delete(`http://localhost:9000/del/${value}`).then((response) => {
      console.log("RESPONSE FROM POST", response.data);
    }).catch (err=> {
      // this only runs on error
      console.log("Error While Posting Data", err);
    });
   }
 
    return(
        <div>
            <Navbar/>
          <Row style={{display:'flex',margin:'50px',alignItems:'center'}}>
              <Col md={6}>
             <Image src={detail.image} />
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
                  <button onClick={(e)=>handleDelete(e,detail._id)} style={{backgroundColor:' #ffd480',color:' #000080'}}><h3>Delete product</h3></button>
                 </ListGroupItem>

                </ListGroup>
            </Col>
            <Col></Col>

          </Row>
          
        </div>
    )
}
export default Description;