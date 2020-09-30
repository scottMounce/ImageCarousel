import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Main = ({ main, index, navButtons, toggleModal, show, setShallow }) => {


  // render the main image
  return (
    <div className='mainComp'>
      <img
        src='https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/chevron+(1).svg'
        className='left arrow'
        onClick={
          () => { navButtons('left'); }
        }
      />
      <img
        className='mainImage'
        src={main.url}
        onClick={() => { setShallow(index); toggleModal(!show) }}
        alt='product image'
      />
      <img
        src='https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/chevron.svg'
        className='right arrow'
        onClick={
          () => { navButtons('right') }
        }
      />
    </div>
  )
};

export default Main;
