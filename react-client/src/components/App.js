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
        rover: 'curiosity', // default curiosity - opportunity
        camera: 'navcam', // default navcam - navcam
        sol: '1000', // default 1000 - 1002
      },
    }
    this.getPOTD = this.getPOTD.bind(this);
    this.toggleMarsPhotos = this.toggleMarsPhotos.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, option) {
    let { rover, camera, sol } = this.state.photoSet;
    const { value } = e.target;
    if (option === 'rover') {
      this.setState({
        photoSet: {
          rover: value,
          camera: camera,
          sol: sol,
        }
      })
    }
    if (option === 'camera') {
      this.setState({
        photoSet: {
          rover: rover,
          camera: value,
          sol: sol,
        }
      })
    }
    if (option === 'sol') {
      this.setState({
        photoSet: {
          rover:rover,
          camera: camera,
          sol: value,
        }
      })
    }
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
    if (!marsPhotos) {
      console.log('toggle')
      this.setState({
        marsPhotos: !marsPhotos,
      });
    }
  }

  componentDidMount() {
    this.getPOTD();
  };

  render () {
    const { potd, marsPhotos, photoSet } = this.state;
    if (!marsPhotos) {
      return (
        <div className="display-container">
          <div className="btn-container">
            <button className="btn-explore" onClick={this.toggleMarsPhotos}>Explore Mars</button>
          </div>
          <RoverSelectionForm handleChange={this.handleChange} />
          <h1>NASA Photo of the Day</h1>
          <PhotoOfTheDay potd={potd} />
        </div>
      );
    }
    return (
      <div className="display-container">
        <h1>Explore Mars</h1>
        <PhotoPlayer className="photo-player" marsPhotos={marsPhotos} photoSet={photoSet} />
        <div className="btn-container">
          <button className="btn-explore" onClick={this.toggleMarsPhotos}>Explore Mars</button>
        </div>
        <RoverSelectionForm handleChange={this.handleChange} />
      </div>
    );
  }
};

export default App;
