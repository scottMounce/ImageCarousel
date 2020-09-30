import React, { useState, useEffect } from 'react';
import ModalStack from './ModalStack.jsx';
import ModalMain from './ModalMain.jsx';

const Modal = ({ show, photos, main, toggleModal }) => {
  // TODO: set up a separate state for the main within the modal, since the main
  // within the modal is determined by the original main when it is rendered, but
  // becomes independent after that point
  // currently this does not happen properly and the main image of the modal does
  // not render
  const copyMain = { ...main }
  const [modalMain, setModalMain] = useState(copyMain);


  if (show) {
    return (
      <div className='modal'>
        <ModalStack photos={photos} />
        <button
          onClick={() => { toggleModal(!show) }}
          className='close-btn'>
          Close
           </button>
        <ModalMain main={modalMain} />
      </div>
    )
  }
  return null;

};

export default Modal;