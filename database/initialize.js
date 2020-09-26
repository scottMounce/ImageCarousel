const Promise = require('bluebird');
const faker = require('faker');
const db = require('./db.js');

const database = 'imageCarousel';
var seededProducts = [];
var seededPhotos = []

const initialize = (db) => {

  db.connectAsync()
    .then(() => console.log(`Connected to the ${database} db`))
    .then(() => db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${database}`))
    .then(() => db.queryAsync(`USE ${database}`))

    // Create Products table (product names)
    .then(() => db.queryAsync(`
  CREATE TABLE IF NOT EXISTS Products (
    id int(10) AUTO_INCREMENT PRIMARY KEY,
    product varchar(30) NOT NULL
    );`))
    .then(() =>
      // Create Photos table (photo URLs)
      db.queryAsync(`
      CREATE TABLE IF NOT EXISTS Photos (
        id int(10) AUTO_INCREMENT PRIMARY KEY,
        url varchar(100) NOT NULL,
        productId int(10),

        FOREIGN KEY(productId) REFERENCES Products(id)
        );`)
    )

    // Insert deliberate Products for testing -- these will have
    // specific images to show that the db tables connect properly
    // and the API correctly fetches the data for a product from both
    .then(() => db.queryAsync(`
  INSERT IGNORE INTO Products (id, product) VALUES ('1', 'Pumpkin Pie')`))
    .then(() => db.queryAsync(`
  INSERT IGNORE INTO Products (id, product) VALUES ('2', 'Breakfast Skillet')`))
    .then(() => db.queryAsync(`
  INSERT IGNORE INTO Products (id, product) VALUES ('3', 'Pizza')`))
    .then(() => db.queryAsync(`
  INSERT IGNORE INTO Products (id, product) VALUES ('4', 'Shark')`))
    .then(() => db.queryAsync(`
  INSERT IGNORE INTO Products (id, product) VALUES ('5', 'Watermelon')`))


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
    INSERT IGNORE INTO Products (product) VALUES ?`,
      [seededProducts]))
    .then(() => console.log('finished seeding Products table, moving on to Photos table'))


    // Insert deliberate Photos for testing -- these will relate
    // to specific products to show that the db tables connect properly
    // and the API correctly fetches the data for a product from both

    // the first set of photos correlates to Product 1 in the Products table,
    // the Pumpkin Pie costume. Since this will be the default product, it will have
    // the most photos to show off the image carousel at its best
    .then(() => {
      var photos = [
        ['https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/pumpkinpie1.jpg', 1],
        ['https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/pumpkinpie2.jpg', 1],
        ['https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/pumpkinpie3.jpg', 1],
        ['https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/pumpkinpie4.jpg', 1],
        ['https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/pumpkinpie5.jpg', 1],
        ['https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/pumpkinpie6.jpg', 1],
        ['https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/pumpkinpie7.jpg', 1],
        ['https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/pumpkinpie8.jpg', 1],
        ['https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/pumpkinpie9.jpg', 1]]
      return db.queryAsync(`
      INSERT IGNORE INTO Photos (url, productId) VALUES ?`,
        [photos])
    })

    .then(() => {
      var photos = [
        ['https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/breakfast1.jpg', 2],
        ['https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/breakfast2.jpg', 2],
        ['https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/breakfast3.jpg', 2],
        ['https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/breakfast4.jpg', 2],
        ['https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/breakfast5.jpg', 2],
        ['https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/breakfast6.jpg', 2],
        ['https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/breakfast7.jpg', 2],
        ['https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/breakfast8.jpg', 2],
        ['https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/breakfast9.jpg', 2]]
      return db.queryAsync(`
      INSERT IGNORE INTO Photos (url, productId) VALUES ?`,
        [photos])
    })

    .then(() => {
      var photos = [
        ['https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/pizza1.jpg', 3],
        ['https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/pizza2.jpg', 3],
        ['https://petsy-caro3usel-images.s3.us-east-2.amazonaws.com/Petsy+images/pizza3.jpg', 3],
        ['https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/pizza4.jpg', 3],
        ['https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/pizza5.jpg', 3],
        ['https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/pizza6.jpg', 3]]
      return db.queryAsync(`
      INSERT IGNORE INTO Photos (url, productId) VALUES ?`,
        [photos])
    })

    .then(() => {
      var photos = [
        ['https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/shark1.jpg', 4],
        ['https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/shark2.jpg', 4],
        ['https://petsy-caro3usel-images.s3.us-east-2.amazonaws.com/Petsy+images/shark3.jpg', 4],
        ['https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/shark4.jpg', 4],
        ['https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/shark5.jpg', 4],
        ['https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/shark6.jpg', 4]]
      return db.queryAsync(`
      INSERT IGNORE INTO Photos (url, productId) VALUES ?`,
        [photos])
    })

    .then(() => {
      var photos = [
        ['https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/watermelon1.jpg', 5],
        ['https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/watermelon2.jpg', 5],
        ['https://petsy-caro3usel-images.s3.us-east-2.amazonaws.com/Petsy+images/watermelon3.jpg', 5],
        ['https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/watermelon4.jpg', 5],
        ['https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/watermelon5.jpg', 5],
        ['https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/watermelon6.jpg', 5]]
      return db.queryAsync(`
      INSERT IGNORE INTO Photos (url, productId) VALUES ?`,
        [photos])
    })

    // seed 145 more sets of photos using faker
    .then(() => {
      for (var i = 6; i < 150; i++) {
        for (var j = 0; j < 5; j++) {
          var randomPhoto = faker.image.cats();
          seededPhotos.push([randomPhoto, i])
        }
      }
    })
    .then(() => db.queryAsync(`
    INSERT IGNORE INTO Photos (url, productId) VALUES ?`,
      [seededPhotos]))
    .then(() => console.log('finished seeding Photos table'))

    // When setup and seeding is complete, alert the user
    .then(() => console.log('Database setup and seeding complete!'))
    .then(() => db.end())

    // This catches errors in the seeding process
    .catch(err => {
      console.log(err);
    });
};

initialize(db);


