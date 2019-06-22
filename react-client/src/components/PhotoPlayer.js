import React from 'react';
import apiKey from '../authentication';

const axios = require('axios');

class PhotoPlayer extends React.Component {
  constructor(props) {
    super(props);
    const { photos } = this.props;
    this.state = {
      photos: [],
      photo: {},
      activePhotoIdx: 0,
    }
    this.getNavCam = this.getNavCam.bind(this);
    this.cyclePhotos = this.cyclePhotos.bind(this);
  }

  cyclePhotos() {
    const { photos, activePhotoIdx } = this.state;
    let i = activePhotoIdx;
    i += 1;
    this.setState({
      photo: photos[i],
      activePhotoIdx: i,
    });
    if (i >= photos.length - 1) {
      this.setState({
        activePhotoIdx: 0,
      });
    }
    setTimeout(
      this.cyclePhotos,
      1000
    )
  }

  getNavCam() {
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1002&camera=navcam&api_key=${apiKey}`)
      .then((response) => {
        const { photos } = response.data;
        this.setState({
          photos: photos,
          activePhotoIdx: 0,
        })
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
        this.cyclePhotos();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.getNavCam();
  }

  render() {
    const { camera, earth_date, img_src, rover } = this.state.photo;
    return (
      <div className="photo-player-container">
        <img className="active-photo" src={img_src}/>
      </div>
    );
  }
};

export default PhotoPlayer;
