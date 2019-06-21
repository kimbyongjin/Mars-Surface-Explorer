import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import PhotoOfTheDay from './components/PhotoOfTheDay';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      potdUrl: '',
    }

  }

  getPOTD() {

  };

  componentDidMount() {
    $.ajax({
      url: '/items',
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  };

  render () {
    const { potdUrl } = this.state;
    return (
      <PhotoOfTheDay potdUrl={potdUrl} />
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
