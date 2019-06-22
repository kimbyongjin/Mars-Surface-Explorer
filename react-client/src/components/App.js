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
      activePhoto: {},
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

  getNavCam() {
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1002&camera=navcam&api_key=${apiKey}`)
      .then((response) => {
        const { photos } = response.data;
        const start = photos[0];
        this.setState({
          marsPhotos: photos,
          activePhoto: start,
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getPOTD();
    this.getNavCam();
  };

  render () {
    const { potd, marsPhotos, activePhoto } = this.state;
    return (
      <div className="display-container">
        <PhotoPlayer className="photo-player" activePhoto={activePhoto} />
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
