import React from 'react';
import apiKey from '../authentication';
import PhotoOfTheDay from './PhotoOfTheDay'
import PhotoPlayer from './PhotoPlayer';

const axios = require('axios');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      potd: {},
      marsPhotos: false,
    }
    this.getPOTD = this.getPOTD.bind(this);
    this.toggleMarsPhotos = this.toggleMarsPhotos.bind(this);
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

  toggleMarsPhotos() {
    let { marsPhotos } = this.state;
    this.setState({
      marsPhotos: !marsPhotos,
    });
  }

  componentDidMount() {
    this.getPOTD();
  };

  render () {
    const { potd, marsPhotos, toggleMarsPhotos } = this.state;
    if (!marsPhotos) {
      return (
        <div className="display-container">
          <h2>NASA Photo of the Day</h2>
          <PhotoOfTheDay potd={potd} />
          <PhotoPlayer className="photo-player" marsPhotos={marsPhotos} toggleMarsPhotos={toggleMarsPhotos} />
        </div>
      );
    }
    return (
      <div className="display-container">
        <h2>Explore Mars</h2>
        <PhotoPlayer className="photo-player" marsPhotos={marsPhotos} toggleMarsPhotos={toggleMarsPhotos} />
      </div>
    );
  }
};

export default App;
