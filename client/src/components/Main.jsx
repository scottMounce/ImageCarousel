import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Main = ({ main }) => {

  // render the main image
  // TODO: on click, open additional viewer with zoom functionality
  return (
    <img
      className='mainImage'
      src={main.url}
      width='300'
      height='300'
      onClick={() => { console.log('main clicked') }}
    />
  )
};

export default Main;