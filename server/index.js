const express = require('express');
const db = require('../database/db.js');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve static html file on root request
app.use(express.static(__dirname + '/../public'));

// respond to a request with an id param with all photos matching that product id
app.get('/products/:id', (req, res) => {
  db.connectAsync()
    .then(() => db.queryAsync(`USE imageCarousel`))
    .then(() => db.queryAsync(`
    SELECT Photos.id, product, url FROM Products INNER JOIN Photos ON Products.id = Photos.productID WHERE Products.id = ${req.params.id}`))

    // use response[0] because MySQL also sends back additional information
    // we don't want -- response[0] is an array of all photos that match the
    // request productId
    .then(response => res.json(response[0]));
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;