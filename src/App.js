import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid'
import ForecastExtendedContainer from './containers/forecastExtended'
import LocationList from './containers/locationList'
import './App.css';


const cities = ['Envigado, col', 'Bello, col', 'Sabaneta, col', 'Medellín, col']
class App extends Component {
  render() {
    return ( 
      <Grid>
        <Row>
          <h1 id="PageTitle"> Worldwide weather <span role="img" aria-label="Earth">🌎</span>
          </h1>
        </Row>
        <Row>

          <Col xs={12} md={6}>
            <LocationList cities={cities}></LocationList>
          </Col>

          <Col xs={12} md={6}>
              <ForecastExtendedContainer></ForecastExtendedContainer>
          </Col>
        </Row>
      </Grid>
    ) //End return 
  }
}

export default App  