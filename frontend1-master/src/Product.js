import React from 'react';
import Design from './Design';
import {Row,Col} from "react-bootstrap";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const product=undefined;
function Product({product})
{
    const [searchVal, setSearchVal] = React.useState('');
    console.log("---------",product[0].name)

    
    const handleInput = (e) => {
        setSearchVal(e.target.value);
      }
      
      
    //   const filteredProducts = product?.filter((x) => {
    //     return x.name.toLowerCase().match(searchVal);
    //   });
    const filteredProducts = product.filter(product =>
        product.name.toLowerCase().includes(searchVal.toLowerCase())
      );
    
console.log(product);
return(
    <div>
         <Navbar/>
        
         <div style={{marginRight:"10px",marginLeft:"10px"}}>
         <input   style={{height:"35px",width:"1455px",borderRadius:"10px"}}
          onChange={handleInput}
          value={searchVal}
          type="text" 
          name="product-search" 
          id="product-search" 
          placeholder="Search Products"
        />
        </div>
        {/* {
            filteredProducts.map((x)=>(
                <p>{x}</p>
            ))
        }  */}
               <Row >
        {filteredProducts?.map(detail => (
             <Col key={detail.id}  >
             <Design detail={detail}/>
             </Col>
        ))}
              </Row>


            {/* {
                product?.map((detail)=>
                (
                    <Col key={detail.id}  >
                    <Design detail={detail}/>
                    </Col>
                ))
            } */}
    </div>
)
}
export default Product;
