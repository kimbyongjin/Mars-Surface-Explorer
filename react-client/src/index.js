import React from 'react';
import ReactDOM from 'react-dom';
import PhotoOfTheDay from './components/PhotoOfTheDay';
import apiKey from '../../authentication';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      potdUrl: '',
    }
    this.getPOTD = this.getPOTD.bind(this);
  }

  getPOTD() {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then((response) => {
        console.log(response);
        const { url } = response.data;
        console.log(url);
        this.setState({
          potdUrl: url,
        })
      })
      .catch((err) => {
        console.log(err);
      })
  };

  componentDidMount() {
    this.getPOTD();
  };

  render () {
    const { potdUrl } = this.state;
    return (
      <PhotoOfTheDay potdUrl={potdUrl} />
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
