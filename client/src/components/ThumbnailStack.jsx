import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Stack = ({ photos, chooseMain }) => {

  // render one div for each 'image' in photos
  // on click of any thumbnail, set state of 'main' to be that photo
  const carousel = photos.map((photo, index) =>
    <img
      className='thumbnail'
      src={photo.url}
      onClick={() => chooseMain(photo)}
      key={index}
    />
  );

  return (
    <div className='stack'>{carousel}</div>
  )
};

export default Stack;