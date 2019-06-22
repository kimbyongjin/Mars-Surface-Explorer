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
      marsPhotos: [],
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
        <PhotoPlayer className="photo-player" marsPhotos={marsPhotos}  />
        <PhotoOfTheDay potd={potd} />
        <h2 className="mars-photo-container">Explore Mars
          {
            marsPhotos.map((photo, i) => <MarsPhoto photo={photo} key={i} />)
          }
        </h2>
      </div>
    );
  }
};

export default App;
