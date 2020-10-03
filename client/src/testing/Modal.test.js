import Jest from 'jest';
import React from 'react';
import Modal from '../components/Modal.jsx';

import { render, screen } from '@testing-library/react'

describe('Modal', () => { // start of Modal component tests

  test('sanity check for Modal', () => {
    expect(true).toBe(true);
  });

  var mockPhotos = [
    { id: 1, product: 'Test', url: 'xxx' },
    { id: 2, product: 'Test', url: 'xxx' },
    { id: 3, product: 'Test', url: 'xxx' },
    { id: 4, product: 'Test', url: 'xxx' },
    { id: 5, product: 'Test', url: 'xxx' }
  ]

  var modal = <Modal
    show={true}
    photos={mockPhotos}
    toggleModal={() => { }}
    shallowInd={0}
  />
  var noModal = <Modal
    show={false}
    photos={mockPhotos}
    toggleModal={() => { }}
    shallowInd={0}
  />


  test('does not render Modal if show is false', () => {
    render(noModal);
    // screen.debug();
  });

  test('renders Modal if show is true', () => {
    render(modal);
    // screen.debug();
  });

  test('renders close modal button', () => {
    render(modal);
    screen.getByAltText('close modal');
  });

  describe('ModalStack block', () => { // start of ModalStack tests
    test('renders first thumbnail based on photos it receives', () => {
      render(modal);
      screen.getByAltText('thumbnail 1 of Test');
    });

    test('renders last thumbnail based on photos it receives', () => {
      render(modal);
      screen.getByAltText('thumbnail 5 of Test');
    });
  }); // end of ModalStack tests

  describe('ModalMain block', () => { // start of ModalMain tests
    test('renders left navigation arrow', () => {
      render(modal);
      screen.getByAltText('left nav arrow');
    });

    test('renders right navigation arrow', () => {
      render(modal);
      screen.getByAltText('right nav arrow');
    });

    test('renders main image', () => {
      render(modal);
      screen.getByAltText('product image');
    });
  }); // end of ModalMain tests

}); // end of Modal tests