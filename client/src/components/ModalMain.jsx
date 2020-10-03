import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import ModalMagnified from './ModalMagnified.jsx';

const ModalMain = ({ main, navButtons }) => {

  const [magnified, toggleMag] = useState(false);

  return (
    <div className='ModalMain'>
      <img
        src='https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/chevron+(1).svg'
        className='left arrow'
        onClick={() => { navButtons('left') }}
      />
      <ModalMagnified
        main={main}
        toggleMag={toggleMag}
        magnified={magnified}
      />
      <img
        src='https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/chevron.svg'
        className='Mright arrow'
        onClick={() => { navButtons('right') }}
      />
    </div >
  )
};

export default ModalMain;
