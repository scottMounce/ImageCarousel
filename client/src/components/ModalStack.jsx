import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const ModalStack = ({ photos }) => {
  // the mainID prop is used to highlight the thumbnail matching the main
  // photo with a black border, as Etsy does. If the mainID matches that particular
  // photo's id, it gets the class 'active', otherwise nothing happens

  // render one div for each 'image' in photos
  // on click of any thumbnail, set state of 'main' to be that photo
  const carousel = photos.map((photo, index) =>
    <img
      className={`thumbnail modalThumbnail `}
      src={photo.url}
      onClick={() => { console.log('modal stack clicked') }}
      key={index}
      alt='product thumbnail'
    />
  );

  return (
    <div className='stack modalStack'>{carousel}</div>
  )
};

export default ModalStack;