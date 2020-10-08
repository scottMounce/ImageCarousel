const express = require('express');
const db = require('../database/db.js');
const component = require('./template.js');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// variable to ensure we only connect to the database on the first request
let connectedToDB = false;

// serve static html file on root request
app.use(express.static(__dirname + '/../public'));

app.get('/:id', (req, res) => {
  res.send(component);
});

// respond to a request with an id param with array of
// all photos matching that product id
app.get('/products/:id', (req, res) => {
  // this variable simplifies our db queries -- it asks for an array of objects of
  // photo data that has the photo ID, its url, and the name of the product
  var photoReq = `
  SELECT
  Photos.id, product, url
  FROM Products
  INNER JOIN Photos
  ON Products.id = Photos.productID
  WHERE Products.id = ${req.params.id}`;

  // we check for the var connectedToDV because we only want to connect once,
  // if we try to connect multiple times we get an error because we try to connect
  // while we are already connected -- the first call connects to our imageCarousel
  // database and sets connectedToDB to true so we can simply query from that point on
  if (!connectedToDB) {
    db.connectAsync()
      .then(() => db.queryAsync('USE imageCarousel'))
      .then(() => db.queryAsync(photoReq))
      // use response[0] because MySQL also sends back additional information
      // we don't want -- response[0] is an array of all photos that match the
      // request productId
      .then(dbResults => {
        connectedToDB = true;
        res.json(dbResults[0]);
      });
  } else {
    db.queryAsync(photoReq)
      // see note about request above for why dbResults[0] is sent
      .then(dbResults => {
        res.json(dbResults[0]);
      });
  }
});

module.exports = app;