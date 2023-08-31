import React ,{useEffect,useState} from 'react';
import axios from "axios";

function Reportfeed()
{
  const [field,setfield]=useState([]);
    useEffect(() => {
      displayreport();
       }, []);
    const displayreport=(e)=>
    {
    axios.get('http://localhost:9000/reportfeed')
    .then(response => {
        const a=response.data;
        setfield(a);
        console.log(response.data)
      })
      .catch(error => {
        console.error(error);
      });
     }
    return(
      <div>
        <h3 style={{display:"flex",alignItems:"center",textAlign:"center",justifyContent:"center",height:'10vh'}}>Customer who sent feedback</h3>
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
          <th>Name</th>
          <th>Email</th>
          <th>Feedback</th>
        </tr>
      </thead>
      <tbody>
        {field.map((item) => (
          <tr style={{  border: "1px solid #ccc",
          padding: "8px",
          textAlign: "left"
        }} key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.feedback}</td>

          </tr>
        ))}
      </tbody>
    </table>
        </div>
        </div>
    );
}
export default Reportfeed;