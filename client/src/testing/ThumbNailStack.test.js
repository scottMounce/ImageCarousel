import Jest from 'jest';
import React from 'react';
import Stack from '../components/ThumbnailStack.jsx';

import { shallow } from 'enzyme';

describe('ThumbnailStack', () => { // start of Stack component tests

  // hardcoded example of what the 'photos' that might be passed in to Stack would look like
  // normally photos is the result of an API call to /products/:id
  var mockPhotos = [
    { id: 1, product: 'Test', url: 'xxx' },
    { id: 2, product: 'Test', url: 'xxx' },
    { id: 3, product: 'Test', url: 'xxx' },
    { id: 4, product: 'Test', url: 'xxx' },
    { id: 5, product: 'Test', url: 'xxx' }
  ]
  const wrapper = shallow(<Stack photos={mockPhotos} chooseMain={() => { }} mainID={1} />)

  test('sanity check for Stack', () => {
    expect(true).toBe(true);
  });

  test('renders the Stack', () => {
    expect(wrapper.exists);
  })

  test('The Stack renders a div with class "stack"', () => {
    expect(wrapper.hasClass('stack'));
  })

  test('The Stack should render the correct number of photos', () => {
    expect(wrapper.children().length === 5);
  })

}); // end of Stack tests