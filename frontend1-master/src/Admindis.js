import React from 'react';
import Design1 from './Design1';
import {Row,Col} from "react-bootstrap";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Admindis({product})
{

// console.log(product);
// return(<div>
//         <Navbar/>
//          <Row>
//             {
//                 product?.map((detail)=>
//                 (
//                     <Col key={detail.id}  >
//                     <Design1 detail={detail}/>
//                     </Col>
//                 ))
//            }
//         </Row>
//     </div>
    console.log(product);
    return(
        <div>
             <Navbar/>
             <Row >
                {
                    product?.map((detail)=>
                    (
                        <Col key={detail.id}  >
                        <Design1 detail={detail}/>
                        </Col>
                    ))
                }
            </Row>
        </div>
    
)
}
export default Admindis;
