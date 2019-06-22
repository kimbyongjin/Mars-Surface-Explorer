import React from 'react';
import MarsPhoto from './MarsPhoto';
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

  nextPhoto() {
    // on click, cycle through photos and set the tartet center photo to the
  }

  previousPhoto() {
    // on click, cycle photos through the
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
        // this.cyclePhotos();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.getNavCam();
  }

  render() {
    const { camera, earth_date, id, img_src, rover } = this.state.photo;
    const { photos } = this.state;
    return (
      <div className="photo-player">
        <div className="btn-container">
          <button className="btn-previous">Prev</button>
          <button className="btn-next">Next</button>
        </div>
        <div className="photo-player-wrapper">
          {
            photos.map((photo) => <MarsPhoto key={id} photo={photo} />)
          }
        </div>
      </div>
    );
  }
};

export default PhotoPlayer;
