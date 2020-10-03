const jest = require('jest');
const app = require('./app.js');
const request = require('supertest');

describe('server', () => { // start of server tests

  test('request to root responds with 200 (success)', () => {
    return request(app)
      .get('/')
      .expect(200);
  });

  test('request to /products/:id is successful', () => {
    return request(app)
      .get('/products/1')
      .expect(200)
  });

  test('request to /products/:id responds with array', () => {
    return request(app)
      .get('/products/1')
      .expect(200)
      .then(response => Array.isArray(response.body))
  });

  test('array response items are objects', () => {
    return request(app)
      .get('/products/1')
      .expect(200)
      .then(response => (typeof response.body[0] === 'object' && response.body[0] !== null))
  });

  describe('photo objects have id, product, url properties', () => { // photo object tests

    test('test photo object id', () => {
      return request(app)
        .get('/products/1')
        .expect(200)
        .then(response => expect(response.body[0].id).toBeTruthy())
    });

    test('test photo object product', () => {
      return request(app)
        .get('/products/1')
        .expect(200)
        .then(response => expect(response.body[0].product).toBeTruthy())
    });

    test('test photo object url', () => {
      return request(app)
        .get('/products/1')
        .expect(200)
        .then(response => expect(response.body[0].url).toBeTruthy())
    });

  }); // end of photo object tests

}); // end of server tests