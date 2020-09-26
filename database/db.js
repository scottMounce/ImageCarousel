const mysql = require('mysql');
const Promise = require('bluebird');
const database = 'imageCarousel';


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'pineapple',
});

const db = Promise.promisifyAll(connection, { multiArgs: true });



module.exports = db;