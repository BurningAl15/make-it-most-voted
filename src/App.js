import './App.css';
import Post from "./components/post";
import { data } from "./data";
import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

function App() {
  const [isAscendant, setIsAscendant] = useState(false);
  const [currentData, setCurrentData] = useState(data);

  const modifyData = (id, add) => {
    let modifiedData = [...currentData];

    modifiedData = modifiedData.map((value) => {
      if (value.id === id) {
        value.votes = add ? value.votes + 1 : value.votes - 1;
      }
      return value
    })

    setCurrentData(modifiedData);
    sortData();
  }

  const sortData = () => {
    let newData = [...currentData];
    return newData.sort((a, b) => {
      if (isAscendant)
        return b.votes - a.votes;
      else
        return a.votes - b.votes;
    }).map((value) => (<Post key={value.id} modifyData={modifyData} id={value.id} title={value.title} description={value.description}
      url={value.url} votes={value.votes} writer_avatar_url={value.writer_avatar_url} post_image_url={value.post_image_url} />))
  }

  return (
    <Container className="App">
      <header className="App-header">
        <h1>Blog posts populares</h1>
      </header>
      <div className="button-container">
        <p>Orden: </p>
        <Button variant={isAscendant ? "primary" : "outline-primary"} onClick={() => { setIsAscendant(true) }}>Ascendente</Button>
        <Button variant={isAscendant ? "outline-primary" : "primary"} onClick={() => { setIsAscendant(false) }}>Descendente</Button>
      </div>
      <ul className="posts-list">
        {
          sortData()
        }
      </ul>
    </Container>
  );
}

export default App;
