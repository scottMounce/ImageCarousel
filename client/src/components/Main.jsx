import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Main = ({ main, index, setIndex, setMain, photos }) => {

  // render the main image
  // TODO: on click, open additional viewer with zoom functionality
  return (
    <div className='mainComp'>
      <img
        src='https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/chevron+(1).svg'
        className='left arrow'
        onClick={
          () => {
            if (index > 0) {
              setIndex(index - 1);
              setMain(photos[index - 1])
            } else {
              setIndex(photos.length - 1);
              setMain(photos[photos.length - 1])
            }
          }
        }
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
        onClick={
          () => {
            if (index < photos.length - 1) {
              setIndex(index + 1);
              setMain(photos[index + 1])
            } else {
              setIndex(0);
              setMain(photos[0])
            }
          }
        }
      />
    </div>
  )
};

export default Main;
