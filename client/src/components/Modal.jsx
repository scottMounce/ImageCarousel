import React from 'react';

const Modal = ({ show, photos }) => {
  if (show) {
    return (
      <div>{photos[0].url}</div>
    )
  }
  return null;

};

export default Modal;