import React from 'react';
import MarsPhoto from './MarsPhoto';
import apiKey from '../authentication';

const axios = require('axios');

class PhotoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      photo: {},
      activePhotoIdx: 0,
    }
    this.getNavCam = this.getNavCam.bind(this);
    this.cyclePhotos = this.cyclePhotos.bind(this);
  }

  cyclePhotos() {
    const { photos, activePhotoIdx, photo } = this.state;
    let i = activePhotoIdx;
    i += 1;
    if (i >= photos.length) {
      this.setState({
        photo: photos[0],
        activePhotoIdx: 0,
      });
      i = 0;
    }
    this.setState({
      photo: photos[i],
      activePhotoIdx: i,
    })
    setTimeout(
      this.cyclePhotos,
      2000
    )
  }

  getNavCam() {
    const { rover, camera, sol } = this.props.photoSet;
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${apiKey}`)
      .then((response) => {
        const { photos } = response.data;
        this.setState({
          photos: photos,
          photo: photos[0],
          activePhotoIdx: 0,
        })
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
        this.cyclePhotos();
      })
  }

  componentDidMount() {
    this.getNavCam();
  }

  render() {
    const { photos, activePhotoIdx, photo } = this.state;
    if (photos.length) {
      return (
        <div className="photo-player">
          <div className="mars-photo-container">
            <MarsPhoto key={photo.id} photo={photo} activePhotoIdx={activePhotoIdx} />
          </div>
        </div>
      );
    }
    return null;
  }
};

export default PhotoPlayer;
