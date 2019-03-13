import React, { Component } from 'react';
import LocationList from './components/LocationList'
import { Grid, Row, Col } from 'react-flexbox-grid'

import './App.css';

const cities = ['Envigado, col', 'Bello, col', 'Sabaneta, col', 'Medellín, col']
class App extends Component {

  handleCickedWeather = city => {
    console.log(city)
  }

  render() {
    return (
      <Grid>
        <Row>
          <h1> Worldwide weather 🌎 </h1>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities} onClickedWeather={this.handleCickedWeather}></LocationList>
          </Col>
          <Col xs={12} md={6}>
            <div className="detailContainer"></div>
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default App;
