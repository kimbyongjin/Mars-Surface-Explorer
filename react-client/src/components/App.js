import React from 'react';
import PhotoOfTheDay from './PhotoOfTheDay';
import apiKey from '../authentication';
import MarsPhoto from './MarsPhoto';

const axios = require('axios');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      potdUrl: '',
      mastPhotos: [],
    }
    this.getPOTD = this.getPOTD.bind(this);
  }

  getPOTD() {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then((response) => {
        const { url } = response.data;
        this.setState({
          potdUrl: url,
        })
      })
      .catch((err) => {
        console.log(err);
      })
      .then(
        axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&camera=mast&api_key=${apiKey}`)
        .then((response) => {
          console.log(response.data)
          const { photos } = response.data;
          this.setState({
            mastPhotos: photos,
          })
        })
        )
        .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getPOTD();
  };

  render () {
    const { potdUrl, mastPhotos } = this.state;
    return (
      <div className="display-container">
        <h2 className="potd-container">NASA Photo of the Day
          <PhotoOfTheDay potdUrl={potdUrl} />
        </h2>
        <h2 className="mars-photo-container">Explore Mars
          {mastPhotos.map((photo, i) => {
            return <MarsPhoto photo={photo} key={i} />
          })}
        </h2>
      </div>
    );
  }
};

export default App;
