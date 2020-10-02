import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Main = ({ main, index, navButtons, toggleModal, show, setShallow, fade }) => {


  // render the main image
  // open a modal viewer upon clicking the main image
  return (
    <div className='mainComp'>
      <img
        src='https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/chevron+(1).svg'
        className='left arrow'
        onClick={
          () => {
            navButtons('left');
          }
        }
      />
      <img
        className={`mainImage ${fade ? 'fade1' : ''}`}
        src={main.url}
        onClick={() => { setShallow(index); toggleModal(!show) }}
        alt='product image'
      />
      <img
        src='https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/chevron.svg'
        className='right arrow'
        onClick={
          () => {
            navButtons('right');
          }
        }
      />
    </div>
  )
};

export default Main;
