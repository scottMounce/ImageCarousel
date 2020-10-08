import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './main.css';


const Main = ({ main, index, navButtons, toggleModal, show, setShallow, fade }) => {


  // render the main image
  // open a modal viewer upon clicking the main image
  return (
    <div className={styles.carMainComp}>
      <img
        src='https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/chevron+(1).svg'
        className={`${styles.carLeft} ${styles.carArrow}`}
        alt='left nav arrow'
        onClick={
          () => {
            navButtons('left');
          }
        }
      />
      <img
        className={`${styles.carMainImage} ${fade ? styles.carFade : ''}`}
        src={main.url}
        onClick={() => { setShallow(index); toggleModal(!show); }}
        alt={`main image ${index + 1}`}
      />
      <img
        src='https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/chevron.svg'
        className={`${styles.carRight} ${styles.carArrow}`}
        alt='right nav arrow'
        onClick={
          () => {
            navButtons('right');
          }
        }
      />
    </div>
  );
};

export default Main;
