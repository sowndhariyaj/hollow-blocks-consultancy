import React ,{useEffect,useState} from 'react';
import axios from "axios";

function Reportlogin()
{
  const [list,setlist]=useState([]);
    useEffect(() => {
      displayreport();
       }, []);
    const displayreport=(e)=>
    {
    axios.get('http://localhost:9000/reportlogin')
    .then(response => {
        const a=response.data;
        setlist(a);
        console.log(a);
      })
      .catch(error => {
        console.error(error);
      });
        

    
    }
    return(
      <div>
        <h3 style={{display:"flex",alignItems:"center",textAlign:"center",justifyContent:"center",height:'10vh'}}>Customer who Loggined</h3>
        <div  style={{display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height:"10vh"}}>
         
<table style={{  border: "1px solid #ccc",
  borderCollapse: "collapse",
  width: "80%",
  padding: "10px"}}>
      <thead>
        <tr style={{  border: "1px solid #ccc",
  padding: "8px",
  textAlign: "left"
}}>
          <th>Id</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr style={{  border: "1px solid #ccc",
          padding: "8px",
          textAlign: "left"
        }} key={item._id}>
            <td>{item._id}</td>

            <td>{item.email}</td>
            <td>{item.password}</td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
        </div>
    );
}
export default Reportlogin;