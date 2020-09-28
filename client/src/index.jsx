import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Stack from './components/ThumbnailStack.jsx';
import Main from './components/Main.jsx';

const App = () => {

  // initialize state
  const [photos, setPhotos] = useState([]);
  const [main, setMain] = useState({});

  // utilize useEffect hook to send GET to server with given ID
  // then update state to be the result of the response
  // photos will be an array of all photo objects,
  // main will by default be the first photo in that array
  useEffect(() => {
    axios.get('http://localhost:3001/products/1')
      .then((response) => {
        setPhotos(response.data);
        setMain(response.data[0])
      })
  }, [])

  return (
    <div>
      <Stack photos={photos} chooseMain={setMain} /> <br />
      <Main main={main} />
    </div>
  );

}

ReactDOM.render(<App />, document.getElementById('app'));