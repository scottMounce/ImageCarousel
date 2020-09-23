const Promise = require('bluebird');
const faker = require('faker');

var seededProducts = [];

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

    // Insert deliberate Products for testing -- these will have
    // specific images to show that the db tables connect properly
    // and the API correctly fetches the data for a product from both
    .then(() => db.queryAsync(`
  INSERT INTO Products (id, product) VALUES ('1', 'Pumpkin Pie')`))
    .then(() => db.queryAsync(`
  INSERT INTO Products (id, product) VALUES ('2', 'Breakfast Skillet')`))
    .then(() => db.queryAsync(`
  INSERT INTO Products (id, product) VALUES ('3', 'Pizza')`))
    .then(() => db.queryAsync(`
  INSERT INTO Products (id, product) VALUES ('4', 'Shark')`))
    .then(() => db.queryAsync(`
  INSERT INTO Products (id, product) VALUES ('5', 'Watermelon')`))


    // Insert random data to fill out the database using faker
    // This will create an array of 145 random product names,
    // then insert each product into the Products table where the
    // id handles itself because it auto-increments
    .then(() => {
      for (var i = 6; i < 150; i++) {
        var randomProduct = faker.commerce.product()
        seededProducts.push([randomProduct])
      }
    })
    .then(() => db.queryAsync(`
    INSERT INTO Products (product) VALUES ?`,
      [seededProducts]))

    // This catches errors in the seeding process
    .catch(err => {
      console.log(err);
    });
};


