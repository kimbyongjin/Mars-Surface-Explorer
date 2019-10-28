const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const getPOTD = require('./getPOTD');
const getMarsPhotos = require('./getMarsPhotos');
// const items = require('../database-mongo');

const app = express();

app.use(express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.json());
app.use(cors());

app.get('/nasaPOTD', (req, res) => {
  getPOTD((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/exploreMars', (req, res) => {
  const { query } = req;
  getMarsPhotos(query, (err, photos) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(photos);
    }
  });
});

app.listen(3000, () => console.log('Express server listening on port 3000!'));
