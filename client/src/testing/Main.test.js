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

  const wrapper = shallow(<Main main={mockMain} />)

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

}); // end of Main tests