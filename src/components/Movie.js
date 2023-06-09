import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
function Movie({item,back}) {
  const Backer = (e)=>{
    const trail=e.target
    if (trail.classList.contains("ignore")) {
      console.log('hello')
      return;
    }
    else  back(false)
  }
  return (<div style={{margin:'0 15%'}} onClick={Backer}>
    <Card>
      <Card.Img className='ignore' variant="top" src={item.show.image.medium} style={{margin:'10%',width:'80%'}}/>
      <Card.Body className='ignore'>
        <Card.Title>{item.show.name}</Card.Title>
        <Card.Text>{item.show.summary}
        </Card.Text>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Status : {item.show.status}</ListGroup.Item>
        <ListGroup.Item>Runtime : {item.show.runtime}</ListGroup.Item>
        <ListGroup.Item>Premiered : {item.show.premiered}</ListGroup.Item>
      </ListGroup>
        <Button onClick={Backer}>Go to movies list</Button>
      </Card.Body>
    </Card>
  </div>);
}

export default Movie;