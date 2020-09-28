import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Stack from './components/ThumbnailStack.jsx';

const App = () => {

  // initialize state
  const [photos, setPhotos] = useState([]);
  const [main, setMain] = useState('');

  // utilize useEffect hook to send GET to server with given ID
  useEffect(() => {
    axios.get('http://localhost:3001/products/1')
      .then((response) => {
        console.log(response);
        setPhotos(response.data)
      })
  }, [])

  // render one div for each 'image' in state.photos
  const carousel = photos.map((photo, index) =>
    <img src={photo.url}
      width='50'
      height='50'
      onClick={() => setMain(photo.url)}
      key={index} />
  );

  return (
    <div>
      This is working! <br />
      {carousel} <br />
      <img src={main} />
    </div>
  );

}

ReactDOM.render(<App />, document.getElementById('app'));