
//import './Mapnew.css';
import {TbLocationFilled} from 'react-icons/tb';
import m1 from "./images/m1.png";
import m2 from "./images/m2.png";
import m3 from "./images/m3.png";
import m4 from "./images/m4.png";
function Mapnew() {
  return (
    <div  style={{ backgroundColor:"#EAE7DC"}}>
      <div className='call'>
       <h2 style={{textAlign:"center",color:"#E98074"}}>REACH US AT</h2>
       <h2 style={{textAlign:"center",color:"#E85A4F"}}>NO.1 TAMILNADU HOLLOW BLOCKS AND RCC HUME PIPES</h2>
      <div className='call3' style={{display:"flex"}}>
      <div className='call1' style={{display:"flex"}}>
          <div><img src={m1} style={{height:"40px",width:"40px"}}/></div>
          <div>
          <h2 style={{paddingLeft:"10px",color:"#8E8D8A"}}>PRODUCTION SITE: </h2>
          <h3  style={{paddingLeft:"10px",color:"#E85A4F"}}>238/2 , VALLIPURAM PIRIVU,KOVAI MAIN ROAD,KARUDAYAMPALAYAM,KARUR - 639111.</h3>
          <h2 style={{paddingLeft:"10px" ,color:"#8E8D8A"}}>OFFICE : </h2>
          <h3 style={{paddingLeft:"10px",color:"#E85A4F"}}>37/2 , KARUR-KOVAI BYEPASS ROAD OVERBRIDGE,NEAR SHAKTHI MESS,KARUR - 639002.</h3>
          <h2 style={{paddingLeft:"10px",color:"#8E8D8A"}}>BRANCH :</h2><h3 style={{paddingLeft:"10px",color:"#E85A4F"}}>No: 141/41, Avinashi Road, Near L & T Bye Pass, Neelambur, Coimbatore, Tamil Nadu 641062</h3> <br/>
          <img src={m2}style={{ height:"40px",width:"40px",float:"left"}}/><h2 style={{paddingLeft:"50px",color:"#8E8D8A"}}>CALL US AT :</h2><h3 style={{paddingLeft:"10px",color:"#E85A4F"}}>+91 9790032259,9442532259</h3><br/>
          <img src={m3} style={{ height:"40px",width:"40px",float:"left"}}/> <h2 style={{paddingLeft:"50px",color:"#8E8D8A"}}>GET IN TOUCH WITH </h2><h3 style={{paddingLeft:"10px",color:"#E85A4F"}}>tamilnaduthb@gmail.com</h3><br/>
          <img src={m4} style={{ height:"40px",width:"40px",float:"left"}}/><h2 style={{paddingLeft:"50px",color:"#8E8D8A"}}>OPENS AT :</h2><h3 style={{paddingLeft:"10px",color:"#E85A4F"}}>MON - SAT 9A.M - 7:30P.M</h3>
    </div>
    </div>
    <br/>
    <div className='call4'>
    <iframe src="https://maps.google.com/maps?q=Tamilnadu%20Hollow%20Blocks,%20Vallipuram%20pirivu,%20Covai%20main%20Road,%20Karudayampalayam,%20Tamil%20Nadu%20639111%20KARUR+(%20TAMILNADU%20HOLLOW%20BLOCKS)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" style={{height:"500px",width:"600px",marginLeft:"80px",border:"transparent"}}></iframe>
    </div>
    </div>
      </div>
    </div>
  );
}

export default Mapnew;
