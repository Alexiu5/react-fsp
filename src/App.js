import React, { Component } from 'react';
import LocationList from './components/LocationList'
import { Grid, Row, Col } from 'react-flexbox-grid'
import ForecastExtended from './components/ForecastExtended'
import './App.css';

const cities = ['Envigado, col', 'Bello, col', 'Sabaneta, col', 'Medellín, col']
class App extends Component {

  constructor(){
    super();
    this.state = {
      city: ''
    }
  }

  handleCickedWeather = city => {
    this.setState({
      city
    })

  }

  render() {
    
    return (
      <Grid>
        <Row>
          <h1 id="PageTitle"> Worldwide weather <span role="img" aria-label="Earth">🌎</span>
          </h1>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities} onClickedWeather={this.handleCickedWeather}></LocationList>
          </Col>
          <Col xs={12} md={6}>
            <ForecastExtended city={this.state.city}></ForecastExtended>
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default App;
