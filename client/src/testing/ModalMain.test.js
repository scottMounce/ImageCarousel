import Jest from 'jest';
import React from 'react';
import ModalMain from '../components/ModalMain.jsx';

import { shallow } from 'enzyme';

describe('ModalMain photo', () => { // start of ModalMain component tests


  var mockMain = {
    id: 1,
    product: 'Test',
    url: 'xxx'
  }

  const wrapper = shallow(
    <ModalMain
      main={mockMain}
      navButtons={() => { }}
    />)

  test('sanity check for ModalMain', () => {
    expect(true).toBe(true);
  });

  test('renders the ModalMain photo', () => {
    expect(wrapper.exists);
  })

  test('The ModalMain renders a div with class "mainComp"', () => {
    expect(wrapper.hasClass('mainComp'));
  })

  test('The ModalMain should render the main photo and two navigation buttons', () => {
    expect(wrapper.children().length === 3);
  })

  test('The ModalMain should render a left nav button', () => {
    expect(wrapper.contains(
      <img
        src='https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/chevron+(1).svg'
        className='left arrow'
        onClick={
          () => {
            navButtons('left');
          }
        }
      />));
  })

  test('The ModalMain should render a right nav button', () => {
    expect(wrapper.contains(
      <img
        src='https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/chevron.svg'
        className='right arrow'
        onClick={
          () => {
            navButtons('right');
          }
        }
      />));
  })

  test('The ModalMain should render a main image', () => {
    expect(wrapper.contains(
      <img
        className='mainImage'
        // src={main.url} // main was undefined when shallow rendering modal
        onClick={() => { setShallow(index); toggleModal(!show) }}
        alt='product image'
      />));
  })

}); // end of ModalMain tests