import React from 'react';
import MarsPhoto from './MarsPhoto';
// import apiKey from '../authentication';

const axios = require('axios');

class PhotoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      photo: {},
      activePhotoIdx: 0,
    }
    this.getMarsPhotos = this.getMarsPhotos.bind(this);
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

  getMarsPhotos() {
    const { photoSet } = this.props;
    axios.get('/exploreMars', {
      params: photoSet,
    })
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
    this.getMarsPhotos();
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
