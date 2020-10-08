import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './modalMain.css';

import ModalMagnified from '../ModalMagnified/ModalMagnified.jsx';

const ModalMain = ({ main, navButtons }) => {

  const [magnified, toggleMag] = useState(false);

  return (
    <div className={styles.carModalMain}>
      <img
        src='https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/chevron+(1).svg'
        className={`${styles.carModalLeft} ${styles.carArrow}`}
        alt='left nav arrow'
        onClick={() => { navButtons('left'); }}
      />
      <ModalMagnified
        main={main}
        toggleMag={toggleMag}
        magnified={magnified}
      />
      <img
        src='https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/chevron.svg'
        className={`${styles.carModalRight} ${styles.carArrow}`}
        alt='right nav arrow'
        onClick={() => { navButtons('right'); }}
      />
    </div >
  );
};

export default ModalMain;
