import React from 'react';
import PhotoOfTheDay from './PhotoOfTheDay'
import PhotoPlayer from './PhotoPlayer';
import RoverSelectionForm from './RoverSelectionForm';

const axios = require('axios');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      potd: {},
      photoSet: {
        rover: 'curiosity', // default curiosity - opportunity
        camera: 'navcam', // default navcam - navcam
        sol: '555', // default 1000 - 1002
      },
      marsPhotos: [],
      activePhoto: {},
      activePhotoIdx: 0,
    }
    this.getPOTD = this.getPOTD.bind(this);
    this.getMarsPhotos = this.getMarsPhotos.bind(this);
    this.cyclePhotos = this.cyclePhotos.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getPOTD() {
    axios.get('/nasaPOTD')
      .then((response) => {
        const { data } = response;
        this.setState({
          potd: data,
        })
      })
      .catch((err) => {
        console.error(err);
      });
  };

  getMarsPhotos() {
    const { photoSet } = this.state;
    axios.get('/exploreMars', {
      params: photoSet,
    })
      .then((response) => {
        const { photos } = response.data;
        this.setState({
          marsPhotos: photos,
          activePhoto: photos[0],
          activePhotoIdx: 0,
        })
      })
      .catch((err) => {
        console.error(err);
      })
      .then(() => {
        this.cyclePhotos();
      })
  }

  cyclePhotos() {
    const { marsPhotos, activePhotoIdx, } = this.state;
    let i = activePhotoIdx;
    i += 1;
    if (i >= marsPhotos.length) {
      this.setState({
        activePhoto: marsPhotos[0],
        activePhotoIdx: 0,
      });
      i = 0;
    }
    this.setState({
      activePhoto: marsPhotos[i],
      activePhotoIdx: i,
    })
    setTimeout(
      this.cyclePhotos,
      2000
    )
  }

  handleChange(e, option) {
    let { rover, camera, sol, } = this.state.photoSet;
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

  componentDidMount() {
    this.getPOTD();
  };

  render () {
    const { potd, marsPhotos, activePhoto, } = this.state;
    if (!marsPhotos.length) {
      return (
        <div className="display-container">
          <div className="btn-container">
            <button className="btn-explore" onClick={this.getMarsPhotos}>Explore Mars</button>
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
        <PhotoPlayer className="photo-player" marsPhotos={marsPhotos} activePhoto={activePhoto} />
        <div className="btn-container">
          <button className="btn-explore" onClick={this.getMarsPhotos}>Explore Mars</button>
        </div>
        <RoverSelectionForm handleChange={this.handleChange} />
      </div>
    );
  }
};

export default App;
