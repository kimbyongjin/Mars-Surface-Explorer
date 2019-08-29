const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const items = require('../database-mongo');

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

app.listen(3000, () => console.log('listening on port 3000!'));
