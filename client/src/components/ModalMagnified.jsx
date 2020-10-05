import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import {
  SideBySideMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION
} from "react-image-magnifiers";

const ModalMagnified = ({ main, toggleMag, magnified }) => {

  if (magnified) {
    return (
      <div onClick={() => { toggleMag(!magnified) }}>
        <SideBySideMagnifier
          className={'car-magnified'}
          alwaysInPlace={true}
          imageSrc={main.url}
        />
      </div>
    )
  } else {
    return (
      < img
        className='car-mainImage car-MMainImage'
        onClick={() => { toggleMag(!magnified) }}
        src={main.url}
        alt='product image'
      />
    )
  }
};

export default ModalMagnified;
