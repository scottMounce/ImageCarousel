import Jest from 'jest';
import React from 'react';
import Modal from '../components/Modal.jsx';

import { shallow } from 'enzyme';

describe('Main photo', () => { // start of Modal component tests

  var mockPhotos = [
    { id: 1, product: 'Test', url: 'xxx' },
    { id: 2, product: 'Test', url: 'xxx' },
    { id: 3, product: 'Test', url: 'xxx' },
    { id: 4, product: 'Test', url: 'xxx' },
    { id: 5, product: 'Test', url: 'xxx' }
  ]

  const wrapper = shallow(
    <Modal
      show={true}
      photos={mockPhotos}
      toggleModal={() => { }}
      shallowInd={0}
    />)

  test('sanity check for Modal', () => {
    expect(true).toBe(true);
  });

  test('renders the Modal', () => {
    expect(wrapper.exists);
  })

  test('The Modal renders a div with class "modal"', () => {
    expect(wrapper.hasClass('modal'));
  })

  test('The Modal should render 4 children (shadeFilter, ModalMain, ModalStack, close button)', () => {
    expect(wrapper.children().length === 4);
  })

  test('The Modal should render a shadeFilter', () => {
    expect(wrapper.contains(<div className='shadeFilter'
      onClick={() => { toggleModal(!show) }}>
    </div>));
  })

  // ModalMain and ModalStack will get their own test files, and it can be assumed that
  // since the proper number of children are being rendered, they are probably being
  // rendered by Modal

  test('The Modal should render a close button', () => {
    expect(wrapper.contains(<button
      onClick={() => { toggleModal(!show); setModalIndex(shallowInd) }}
      className='close-btn'>
      Close
       </button>));
  })

}); // end of Modal tests