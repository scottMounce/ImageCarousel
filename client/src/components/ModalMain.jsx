import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const ModalMain = ({ main, navButtons }) => {

  // render the main image within the modal
  // TODO: zoom feature on main image
  return (
    <div className='mainComp'>
      <img
        src='https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/chevron+(1).svg'
        className='left arrow'
        onClick={() => { navButtons('left') }}
      />
      <img
        className='mainImage'
        src={main.url}
        alt='product image'
      />
      <img
        src='https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/chevron.svg'
        className='right arrow'
        onClick={() => { navButtons('right') }}
      />
    </div>
  )
};

export default ModalMain;
