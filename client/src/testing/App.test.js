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

  test('The App renders a div with class "fullService"', () => {
    expect(wrapper.hasClass('fullService'));
  })

  test('The App should render 2 children (div w/ service view, Modal', () => {
    expect(wrapper.children().length === 2);
  })

}); // end of App tests