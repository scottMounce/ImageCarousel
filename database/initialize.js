const Promise = require('bluebird');

module.exports = (db) => {
  if (db.queryAsync) {
    db = Promise.promisifyAll(db);
  }
  // Create Products table (product names)
  return db.queryAsync(`
  CREATE TABLE IF NOT EXISTS Products (
    id int(10) AUTO_INCREMENT PRIMARY KEY,
    product varchar(30) NOT NULL
    );`)
    .then(() => {
      // Create Photos table (photo URLs)
      return db.queryAsync(`
      CREATE TABLE IF NOT EXISTS Photos (
        id int(10) AUTO_INCREMENT PRIMARY KEY,
        url varchar(100) NOT NULL,
        productId int(10),

        FOREIGN KEY(productId) REFERENCES Products(id)
        );`);
    })
    .catch(err => {
      console.log(err);
    });
};

