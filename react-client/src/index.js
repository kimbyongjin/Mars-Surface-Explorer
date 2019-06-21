import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoOfTheDayUrl: '',
    }
  }

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
  }

  render () {
    return (<div>
      <h1>Item List</h1>
      <List items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));