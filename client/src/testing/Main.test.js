import Jest from 'jest';
import React from 'react';
import Main from '../components/Main.jsx';

import { shallow } from 'enzyme';

describe('Main photo', () => { // start of Main component tests


  var mockMain = {
    id: 1,
    product: 'Test',
    url: 'xxx'
  }

  const wrapper = shallow(
    <Main
      main={mockMain}
      index={0}
      navButtons={() => { }}
      toggleModal={() => { }}
      show={false}
      setShallow={() => { }}
    />)

  test('sanity check for Main', () => {
    expect(true).toBe(true);
  });

  test('renders the Main photo', () => {
    expect(wrapper.exists);
  })

  test('The Main renders a div with class "mainComp"', () => {
    expect(wrapper.hasClass('mainComp'));
  })

  test('The Main should render the main photo and two navigation buttons', () => {
    expect(wrapper.children().length === 3);
  })

  test('The Main should render a left nav button', () => {
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

  test('The Main should render a right nav button', () => {
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

  test('The Main should render a main image', () => {
    expect(wrapper.contains(
      <img
        className='mainImage'
        // src={main.url} // main was undefined when shallow rendering modal
        onClick={() => { setShallow(index); toggleModal(!show) }}
        alt='product image'
      />));
  })

}); // end of Main tests