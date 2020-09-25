const jest = require('jest');
const app = require('./index.js');
const axios = require('axios');

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

  // TODO: additional tests when there is additional server functionality

}); // end of server tests