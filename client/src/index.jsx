import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  // initialize
  const [photos, setPhotos] = useState(['testing', 'number 2', 'hooks are cool']);
  const [main, setMain] = useState('');

  const carousel = photos.map((photo) =>
    <div onClick={() => setMain(photo)}>{photo}</div>
  );

  return (
    <div>
      This is working! <br />
      {carousel} <br />
      <div>{main}</div>

    </div>
  );

}

ReactDOM.render(<App />, document.getElementById('app'));