import React, { useState, useEffect } from 'react';
import ModalStack from './ModalStack.jsx';
import ModalMain from './ModalMain.jsx';

const Modal = ({ show, photos, shallowInd, toggleModal }) => {
  // shallowInd passes in the index of main that existed when the modal was
  // opened so that it modalMain can match the main
  // at the time it is opened, but be indpendent from then on
  const [modalMain, setModalMain] = useState({});
  const [modalIndex, setModalIndex] = useState(0);

  // these two useEffect functions manage the interactions between the App main and
  // modalMain by updating the modalIndex whenever the shallowInd
  // changes, and allowing modalMain to change when the modalIndex is changed
  useEffect(() => {
    setModalIndex(shallowInd)
  }, [shallowInd])
  useEffect(() => {
    setModalMain(photos[modalIndex])
  })

  // this function is passed to the navigation buttons in modalMain and allows a
  // user to cycle through the thumbnails in the ModalStack to update ModalMain
  // it does this by setting the ModalMain to the previous/next index and wrapping
  // when it is at the first or last index
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

  // only render the modal if the show state is true. this is true when the App
  // main image is clicked, and can be set to false by clicking the close button
  // within the modal, derendering it
  // the close button also sets the ModalIndex to equal the current shallowInd so
  // that the index of a previous iteration of the modal does not alter the next
  // modal a user opens
  // the 'shadeFilter' div exists to 'dim' the main App when the modal is opened
  if (show) {
    return (
      // <div>

      <div className='modal'>
        <div className='shadeFilter'
          onClick={() => { toggleModal(!show) }}>
        </div>
        <img
          src='https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/cancel.svg'
          className='close-btn'
          alt='close modal'
          onClick={() => { toggleModal(!show); setModalIndex(shallowInd) }}
        />

        <ModalMain
          main={modalMain}
          navButtons={navButtons}
        />

        <ModalStack
          photos={photos}
          setMain={setModalMain}
          setIndex={setModalIndex}
          mainID={modalMain.id}
        />
      </div>
      // </div>
    )
  }
  return null;

};

export default Modal;