import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Main = ({ main, index, navButtons, toggleModal, show, setShallow, fade }) => {


  // render the main image
  // open a modal viewer upon clicking the main image
  return (
    <div className='car-mainComp'>
      <img
        src='https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/chevron+(1).svg'
        className='car-left car-arrow'
        alt='left nav arrow'
        onClick={
          () => {
            navButtons('left');
          }
        }
      />
      <img
        className={`car-mainImage ${fade ? 'car-fade1' : ''}`}
        src={main.url}
        onClick={() => { setShallow(index); toggleModal(!show) }}
        alt={`main image ${index + 1}`}
      />
      <img
        src='https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/chevron.svg'
        className='car-right car-arrow'
        alt='right nav arrow'
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
