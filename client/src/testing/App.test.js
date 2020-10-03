import Jest from 'jest';
import React from 'react';

import Stack from '../components/ThumbnailStack.jsx';
import Main from '../components/Main.jsx';

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

describe('App', () => { // start of general tests

  // note moving forward that most tests are implicit assertions -- these tests pass because an error
  // would be thrown if the query was not found, so 'expect()' is not explicitly needed

  test('sanity check for App', () => {
    expect(true).toBe(true);
  });

  var mockPhotos = [
    { id: 1, product: 'Test', url: 'xxx' },
    { id: 2, product: 'Test', url: 'xxx' },
    { id: 3, product: 'Test', url: 'xxx' },
    { id: 4, product: 'Test', url: 'xxx' },
    { id: 5, product: 'Test', url: 'xxx' }
  ]

  var mockMain = {
    id: 1,
    product: 'Test',
    url: 'xxx'
  }

  describe('ThumbnailStack tests', () => { // start of Stack tests
    var stack = <Stack
      photos={mockPhotos}
      setMain={() => { }}
      mainID={1}
    />

    test('render Stack', () => {
      render(stack);
      // screen.debug();
    })

    test('renders first thumbnail based on photos it receives', () => {
      render(stack);
      screen.getByAltText('thumbnail 1 of Test');
    });

    test('renders last thumbnail based on photos it receives', () => {
      render(stack);
      screen.getByAltText('thumbnail 5 of Test');
    });

  }); // end of Stack tests

  describe('Main tests', () => { // start of Main tests
    var main = <Main
      main={mockMain}
      index={0}
      navButtons={() => { }}
      toggleModal={() => { }}
      show={false}
      setShallow={() => { }}
    />

    test('render Main', () => {
      render(main);
      // screen.debug();
    })

    test('renders left nav arrow', () => {
      render(main);
      screen.getByAltText('left nav arrow');
    });

    test('renders right nav arrow', () => {
      render(main);
      screen.getByAltText('right nav arrow');
    });

    test('renders the main image', () => {
      render(main);
      screen.getByAltText('main image 1');
    })

  }); // end of Stack tests

}); // end of general tests