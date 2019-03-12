import React, { Component } from 'react';
import LocationList from './components/LocationList'
import './App.css';

const cities = ['Medellín', 'Lima', 'Barcelona', 'San francisco']
class App extends Component {
  
  handleCickedWeather = city =>{
    console.log(city)
  }
  
  render() {
    return (
      <div className="listCities">
        <LocationList cities = {cities} onClickedWeather={this.handleCickedWeather}></LocationList>
      </div>
    );
  }
}
export default App;
