import Jest from 'jest';
import React from 'react';
import App from '../components/App.jsx';

import { shallow } from 'enzyme';

describe('App', () => { // start of App component tests

  const wrapper = shallow(<App />)

  test('sanity check for App', () => {
    expect(true).toBe(true);
  });

  test('renders the App', () => {
    expect(wrapper.exists);
  })

  test('The App renders a div with class "carousel"', () => {
    expect(wrapper.hasClass('carousel'));
  })

}); // end of App tests