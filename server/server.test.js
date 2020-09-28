const jest = require('jest');
const app = require('./index.js');
const axios = require('axios');
const toBeType = require('jest-tobetype');
expect.extend(toBeType);
const request = require('supertest');

describe('server', () => { // start of server tests

  test('request to root responds with 200 (success)', () => {
    return axios.get('http://localhost:3001/')
      .then(response => {
        return expect(response.status).toBe(200);
      })
      .catch(err => {
        throw err;
      });
  });

  test('request to /products/:id is successful', () => {
    return axios.get('http://localhost:3001/products/1')
      .then(response => {
        return expect(response.status).toBe(200);
      })
      .catch(err => {
        throw err;
      });
  });

  test('request to /products/:id responds with array', () => {
    return axios.get('http://localhost:3001/products/1')
      .then(response => {
        return expect(response.data).toBeType('array');
      })
      .catch(err => {
        throw err;
      });
  });

  test('array response full of objects', () => {
    return axios.get('http://localhost:3001/products/1')
      .then(response => {
        return expect(response.data[0]).toBeType('object');
      })
      .catch(err => {
        throw err;
      });
  });

  describe('photo objects have id, product, url properties', () => { // photo object tests

    test('test photo object id', () => {
      return axios.get('http://localhost:3001/products/1')
        .then(response => {
          return expect(response.data[0].id).toBeTruthy();
        })
        .catch(err => {
          throw err;
        });
    });

    test('test photo object product', () => {
      return axios.get('http://localhost:3001/products/1')
        .then(response => {
          return expect(response.data[0].product).toBeTruthy();
        })
        .catch(err => {
          throw err;
        });
    });

    test('test photo object url', () => {
      return axios.get('http://localhost:3001/products/1')
        .then(response => {
          return expect(response.data[0].url).toBeTruthy();
        })
        .catch(err => {
          throw err;
        });
    });

  }); // end of photo object tests

}); // end of server tests