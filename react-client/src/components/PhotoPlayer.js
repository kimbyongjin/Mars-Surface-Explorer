import React from 'react';
import MarsPhoto from './MarsPhoto';
import apiKey from '../authentication';

const axios = require('axios');

class PhotoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      isPhotoVisible: false,
    }
    this.getNavCam = this.getNavCam.bind(this);
    this.cyclePhotos = this.cyclePhotos.bind(this);
  }

  cyclePhotos() {
    const { photos, activePhotoIdx, photo } = this.state;
    let i = activePhotoIdx;
    i += 1;
    this.setState({
      photo: photos[i],
      activePhotoIdx: i,
    })
    if (i >= photos.length + 1) {
      this.setState({
        activePhotoIdx: 0,
      });
    }
    setTimeout(
      this.cyclePhotos,
      2000
    )
  }

  getNavCam() {
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1002&camera=navcam&api_key=${apiKey}`)
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
    const { photos, activePhotoIdx } = this.state;
    if (photos.length) {
      return (
        <div className="photo-player">
        <div className="btn-container">
          <button className="btn-previous">Prev</button>
          <button className="btn-next">Next</button>
        </div>
        <div className="mars-photo-container">
          {
            photos.map((photo) => <MarsPhoto key={photo.id} photo={photo} activePhotoIdx={activePhotoIdx} />)
          }
        </div>
      </div>
      );
    }
    return null;
  }
};

export default PhotoPlayer;
