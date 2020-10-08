import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './modalMagnified.css';

import {
  SideBySideMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION
} from 'react-image-magnifiers';

const ModalMagnified = ({ main, toggleMag, magnified }) => {

  if (magnified) {
    return (
      <div onClick={() => { toggleMag(!magnified); }}>
        <SideBySideMagnifier
          className={styles.carMagnified}
          alwaysInPlace={true}
          imageSrc={main.url}
        />
      </div>
    );
  } else {
    return (
      < img
        className={`${styles.carMainImage} ${styles.carMMainImage}`}
        onClick={() => { toggleMag(!magnified); }}
        src={main.url}
        alt='product image'
      />
    );
  }
};

export default ModalMagnified;
