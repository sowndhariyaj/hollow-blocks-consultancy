import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
const Design1=({detail})=>
{
    return(
       <div style={{margin:'50px',backgroundColor:'pink'}}>
          <Card className='my-3 p-3 rounded' style={{float : "left",padding:'10px',border:'2px solid black',width:"500px",alignItems:"center",textAlign:"center"}}>
     <Link to={`/description/${detail._id}`}> 
    <Card.Img src={detail.image} variant='top' style={{height:"200px",width:"300px"}}/>
</Link>
<Card.Body>
    <Link to={`/description/${detail._id}`}> 
        <Card.Title as='div'>
            <strong>{detail.name}</strong>
        </Card.Title>
     </Link> 
    <Card.Text>
        {detail.description}
    </Card.Text>
    <Card.Text>
        RS {detail.price}
    </Card.Text>
</Card.Body>
          </Card>
        </div>
    )
}
export default Design1;