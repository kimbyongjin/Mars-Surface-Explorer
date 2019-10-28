const axios = require('axios');
const apiKey = require('./authentication');

const getPOTD = (cb) => {
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    .then((response) => {
      const { data } = response;
      cb(null, data);
    })
    .catch((err) => {
      cb(err);
    });
};

module.exports = getPOTD;
