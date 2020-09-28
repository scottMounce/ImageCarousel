import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Stack from './ThumbnailStack.jsx';
import Main from './Main.jsx';

const App = () => {

  // initialize state
  const [photos, setPhotos] = useState([]);
  const [main, setMain] = useState({});

  // utilize useEffect hook to send GET to server with given ID
  // then update state to be the result of the response
  // photos will be an array of all photo objects,
  // main will by default be the first photo in that array
  useEffect(() => {

    // function that takes the API endpoint in the url and returns it as a string
    // that can be passed into axios request
    var getQueryVariable = (variable) => {
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("/");
        if (pair[0] == variable) { return pair[1]; }
      }
      return (false);
    }

    // get the url parameter for 'products' and if we are at root,
    // set it to 1 by default (first product in db should be default)
    var prodID = getQueryVariable('products');
    if (prodID === false) {
      prodID = 1;
    }

    axios.get(`http://localhost:3001/products/${prodID}`)
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

export default App;