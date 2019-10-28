const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const items = require('../database-mongo');
const getPOTD = require('./getPOTD');

const app = express();

app.use(express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.json());
app.use(cors());

app.get('/items', (req, res) => {
  items.selectAll((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/nasaPOTD', (req, res) => {
  getPOTD((err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(3000, () => console.log('Express server listening on port 3000!'));
