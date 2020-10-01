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
          alwaysInPlace={true}
          style={{ height: '80vh' }}
          imageSrc={main.url}
        />
      </div>
    )
  } else {
    return (
      < img
        className='mainImage'
        onClick={() => { toggleMag(!magnified) }}
        src={main.url}
        alt='product image'
      />
    )
  }
};

export default ModalMagnified;
