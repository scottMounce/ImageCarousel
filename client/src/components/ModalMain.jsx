import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import ModalMagnified from './ModalMagnified.jsx';

const ModalMain = ({ main, navButtons }) => {

  const [magnified, toggleMag] = useState(false);

  return (
    <div className='ModalMain'>
      <img
        src='https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/chevron+(1).svg'
        className='modalLeft arrow'
        alt='left nav arrow'
        onClick={() => { navButtons('left') }}
      />
      <ModalMagnified
        main={main}
        toggleMag={toggleMag}
        magnified={magnified}
      />
      <img
        src='https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/chevron.svg'
        /* the class Mright is to correct an unusual placement bug where the main and modal right
         arrows were not both lining up right with the same position, so they now have different
        classes */
        className='modalRight arrow'
        alt='right nav arrow'
        onClick={() => { navButtons('right') }}
      />
    </div >
  )
};

export default ModalMain;
