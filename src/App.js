import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Movie from './components/Movie';
function App() {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false)
  const [disp, setDisp] = useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='container'>
      {!toggle && data.map(item => (
        <div
        onClick={() => {
          setToggle(true)
          setDisp(item)
        }}
        style={{ display: 'flex',margin:'20px',height:'80%' }}>

          <img src={item.show.image.medium} />

          <Card border="secondary"

            key={item.show.id}>   

            <div style={{ width :'300px'}}>
                <Card.Header>Status : {item.show.status}</Card.Header>
              <Card.Body>
                <Card.Title>{item.show.name}</Card.Title>
                <Card.Text>Language : {item.show.language}</Card.Text>
                <Card.Text>type : {item.show.type}</Card.Text>
                {item.show.rating.average &&
                  <Card.Header>rating : {item.show.rating.average}</Card.Header>}
              </Card.Body>
            </div>
          </Card>
          <br />
        </div>
      ))}
      {toggle && <Movie item={disp} back={setToggle} />}
    </div>
  );
}

export default App;
