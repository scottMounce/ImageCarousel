import Jest from 'jest';
import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import renderer from 'react-test-renderer';
import App from '../components/App.jsx';


describe('App', () => { // start of App component tests

  // setup and teardown recommendations from:
  // https://reactjs.org/docs/testing-recipes.html
  // let container = null;
  // beforeEach(() => {
  //   // setup a DOM element as a render target
  //   container = document.createElement("div");
  //   document.body.appendChild(container);
  // });

  // afterEach(() => {
  //   // cleanup on exiting
  //   unmountComponentAtNode(container);
  //   container.remove();
  //   container = null;
  // });

  it('sanity check for clientside', () => {
    expect(true).toBe(true);
  });

  // it('renders correctly', () => {
  //   const tree = renderer
  //     .create(<App />)
  //     .toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

}); // end of App tests