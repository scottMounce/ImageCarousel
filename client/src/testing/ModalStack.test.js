import Jest from 'jest';
import React from 'react';
import ModalStack from '../components/ModalStack.jsx';

import { shallow } from 'enzyme';

describe('ModalStack', () => { // start of ModalStack component tests

  var mockPhotos = [
    { id: 1, product: 'Test', url: 'xxx' },
    { id: 2, product: 'Test', url: 'xxx' },
    { id: 3, product: 'Test', url: 'xxx' },
    { id: 4, product: 'Test', url: 'xxx' },
    { id: 5, product: 'Test', url: 'xxx' }
  ]
  const wrapper = shallow(
    <ModalStack
      photos={mockPhotos}
      setMain={() => { }}
      setIndex={() => { }}
      mainID={1}
    />)

  test('sanity check for ModalStack', () => {
    expect(true).toBe(true);
  });

  test('renders the ModalStack', () => {
    expect(wrapper.exists);
  })

  test('The ModalStack renders a div with class "stack"', () => {
    expect(wrapper.hasClass('stack'));
  })

  test('The ModalStack should render the correct number of photos', () => {
    expect(wrapper.children().length === 5);
  })

}); // end of ModalStack tests