import React from "react";
import {BsStar} from 'react-icons/bs';
import {FaClock,FaRecycle,FaThumbsUp} from 'react-icons/fa';
import './bottom.css';
// import { CCard, CCardText } from "@coreui/react";
function bottom() {
    return (
        <div>
            <div className="b">
            <h3 className="hr-lines">OUR CORE VALUES</h3>
            <h5 style={{fontWeight:'700'}}>Striving for excellence begins at the heart of THB. Whether it's strong values,top quality or timely delivery, we are here to serve.
            </h5> <br /><div className="b3">
           <div  className="b2">
           <div className="b1">
            <BsStar  className="ic"/>
            
            </div><br/> 
            <h6 style={{fontWeight:'700',color:'white'}}>Highest Quality</h6> <br/> <h6>
Providing uncompromised quality and unmatchable reliability since 1973</h6>

        </div>
        <div  className="b2">
           <div className="bic1">
            <FaClock  className="ic"/>
            </div><br/> 
            <h6 style={{fontWeight:'700',color:'white'}}>Timely Delivery</h6> <br/> <h6>
Enabling timely delivery of our product has proven to be the key in maintaining customer satisfaction
      </h6>  </div>
        <div  className="b2">
           <div className="bic2">
            <FaRecycle  className="ic"/>
            </div>
            <br/> 
            <h6 style={{fontWeight:'700',color:'white'}}>Eco Friendly </h6><br/> <h6>
We work in an eco-friendly environment and ensure the best use of resources with minimal wastage</h6>

        </div>
        <div  className="b2">
           <div className="bic3">
            <FaThumbsUp  className="ic"/>
            </div>
             <br/>
            <h6 style={{fontWeight:'700',color:'white'}}>
            Ethical Business Practices</h6> <br/><h6>
APCO prides itself in ethical business practices while contributing to corporate social responsibility.</h6>

        </div>
        </div>
        </div>
        </div>
    );
}

export default bottom;