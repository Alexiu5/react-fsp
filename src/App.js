import React, { Component } from 'react';
import Location from './components/WeatherLocation/'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Location></Location>
      </div>
    );
  }
}
export default App;
