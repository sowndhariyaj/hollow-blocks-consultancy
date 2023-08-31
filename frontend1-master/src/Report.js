import React ,{useEffect,useState} from 'react';
import axios from "axios";

function Report()
{
  const [list,setlist]=useState([]);
    useEffect(() => {
      displayreport();
       }, []);
    const displayreport=(e)=>
    {
    axios.get('http://localhost:9000/report')
    .then(response => {
        const a=response.data;
        setlist(a);
        console.log(response.data)
      })
      .catch(error => {
        console.error(error);
      });
        

    
    }
    return(
      <div>
        <h3 style={{display:"flex",alignItems:"center",textAlign:"center",justifyContent:"center",height:'10vh'}}>Customer who got quotation</h3>
        <div  style={{display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height:"10vh"}}>
          {/* {
            list?.map((detail)=>
                (
                  <div style={{alignContent:"center",alignItems:'center',textAlign:'center',display:'flex'}}>
                    <table style={{border:"px solid black"}} >
                    <th style={{border:"px solid black"}}>
                    <td>Name</td>
                    <td>Phone</td>
                    <td>Email</td>
                    </th>
                    <tr style={{border:"px solid black"}}>
                    <td>{detail.name}</td>
                    <td>{detail.phone}</td>
                    <td>{detail.email}</td>
                    </tr>
                    </table>
                 </div>
                ))
}  */}
<table style={{  border: "1px solid #ccc",
  borderCollapse: "collapse",
  width: "80%",
  padding: "10px"}}>
      <thead>
        <tr style={{  border: "1px solid #ccc",
  padding: "8px",
  textAlign: "left"
}}>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr style={{  border: "1px solid #ccc",
          padding: "8px",
          textAlign: "left"
        }} key={item.id}>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>${item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
        </div>
    );
}
export default Report;