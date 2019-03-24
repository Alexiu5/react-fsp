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
      city: null
    }
  }

  handleCickedWeather = city => {
    this.setState({
      city
    })

  }

  render() {
    const {city} = this.state
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
            {
              city && <ForecastExtended city={city}></ForecastExtended>
            }
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default App;
