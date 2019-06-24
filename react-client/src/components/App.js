import React from 'react';
import apiKey from '../authentication';
import PhotoOfTheDay from './PhotoOfTheDay'
import PhotoPlayer from './PhotoPlayer';
import RoverSelectionForm from './RoverSelectionForm';

const axios = require('axios');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      potd: {},
      marsPhotos: false,
      photoSet: {
        rover: 'curiosity', // default opportunity - curiosity
        camera: 'rhaz', // default navcam - mast
        sol: '1220', // default 1002 - 1001
      },
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
    const { potd, marsPhotos, photoSet } = this.state;
    if (!marsPhotos) {
      return (
        <div className="display-container">
          <h1>NASA Photo of the Day</h1>
          <PhotoOfTheDay potd={potd} />
          <div className="btn-container">
            <button className="btn-explore" onClick={this.toggleMarsPhotos}>Explore Mars</button>
          </div>
          <RoverSelectionForm />
        </div>
      );
    }
    return (
      <div className="display-container">
        <h1>Explore Mars</h1>
        <PhotoPlayer className="photo-player" marsPhotos={marsPhotos} photoSet={photoSet} />
      </div>
    );
  }
};

export default App;
