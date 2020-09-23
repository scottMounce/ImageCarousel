const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'pineapple',
});

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('connected');
  connection.query(`CREATE DATABASE IF NOT EXISTS imageCarousel`,
    (err) => {
      if (err) {
        console.log(err);
      }
      connection.query(`USE imageCarousel`, (err) => {
        if (err) {
          throw err;
        }
        connection.query(`CREATE TABLE IF NOT EXISTS Products (
      id int(10) AUTO_INCREMENT PRIMARY KEY,
      product varchar(30) NOT NULL )`,
          (err) => {
            if (err) {
              throw err;
            }
            console.log('Products Table created');
            connection.query(`CREATE TABLE IF NOT EXISTS Photos (
      id int(10) AUTO_INCREMENT PRIMARY KEY,
      url varchar(100) NOT NULL,
      productId int(10),

      FOREIGN KEY(productId) REFERENCES Products(id))`,
              (err) => {
                if (err) {
                  throw err;
                }
                console.log('Photos Table created');
              });
          });
      });
    });
});
