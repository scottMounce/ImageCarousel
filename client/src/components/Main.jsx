import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Main = ({ main }) => {

  // render the main image
  // TODO: on click, open additional viewer with zoom functionality
  return (
    <div className='mainComp'>
      <img
        src='https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/chevron+(1).svg'
        className='left arrow'
      />
      <img
        className='mainImage'
        src={main.url}
        onClick={() => { console.log('main clicked') }}
        alt='product image'
      />
      <img
        src='https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/chevron.svg'
        className='right arrow'
      />
    </div>
  )
};

export default Main;
