const express = require('express');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../public'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;