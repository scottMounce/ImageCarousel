import React, { useState, useEffect } from 'react';
import ModalStack from './ModalStack.jsx';
import ModalMain from './ModalMain.jsx';

const Modal = ({ show, photos, shallowInd, toggleModal }) => {
  // shallowMain passes in the main that existed when the modal was opened, and
  // shallowMain is not affected by changes to main. This allows the ModalMain
  // to match the main at the time it is opened, but be indpendent from then on
  const [modalMain, setModalMain] = useState({});
  const [modalIndex, setModalIndex] = useState(0);
  // useEffect(() => {
  //   setModalMain(photos[shallowInd])
  // })


  const navButtons = ((direction) => {
    if (direction === 'left') {
      if (modalIndex > 0) {
        setModalIndex(modalIndex - 1);
        setModalMain(photos[modalIndex - 1])
      } else {
        setModalIndex(photos.length - 1);
        setModalMain(photos[photos.length - 1])
      }
    }
    if (direction === 'right') {
      if (modalIndex < photos.length - 1) {
        setModalIndex(modalIndex + 1);
        setModalMain(photos[modalIndex + 1])
      } else {
        setModalIndex(0);
        setModalMain(photos[0])
      }
    }
  })

  if (show) {
    return (
      <div className='modal'>
        <ModalStack photos={photos} setMain={setModalMain} setIndex={setModalIndex} mainID={modalMain.id} />
        <button
          onClick={() => { toggleModal(!show) }}
          className='close-btn'>
          Close
           </button>
        <ModalMain main={modalMain} navButtons={navButtons} />
      </div>
    )
  }
  return null;

};

export default Modal;