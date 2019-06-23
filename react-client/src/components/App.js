import React from 'react';
import apiKey from '../authentication';
import PhotoOfTheDay from './PhotoOfTheDay';
import MarsPhoto from './MarsPhoto';
import PhotoPlayer from './PhotoPlayer';

const axios = require('axios');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      potd: {},
    }
    this.getPOTD = this.getPOTD.bind(this);
  }

  getPOTD() {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then((response) => {
        const { data } = response;
        this.setState({
          potd: data,
        })
      })
      .catch((err) => {
        console.log(err);
      })
  };

  componentDidMount() {
    this.getPOTD();
  };

  render () {
    const { potd, marsPhotos } = this.state;
    return (
      <div className="display-container">
        <h2>Explore Mars</h2>
        <PhotoPlayer className="photo-player" marsPhotos={marsPhotos}  />
        <h2>NASA Photo of the Day</h2>
        <PhotoOfTheDay potd={potd} />
      </div>
    );
  }
};

export default App;
