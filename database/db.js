const mysql = require('mysql');
const Promise = require('bluebird');
const database = 'imageCarousel';
const initialize = require('./initialize.js');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'pineapple',
});

const db = Promise.promisifyAll(connection, { multiArgs: true });


db.connectAsync()
  .then(() => console.log(`Connected to the ${database} db`))
  .then(() => db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${database}`))
  .then(() => db.queryAsync(`USE ${database}`))
  .then(() => initialize(db))

module.exports = db;