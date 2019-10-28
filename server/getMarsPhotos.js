const axios = require('axios');
const apiKey = process.env.NASA_KEY;

const getMarsPhotos = (photoParams, cb) => {
  const { rover, camera, sol } = photoParams;
  axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${apiKey}`)
    .then((response) => {
      const { data } = response;
      cb(null, data);
    })
    .catch((err) => {
      cb(err);
    });
};

module.exports = getMarsPhotos;
