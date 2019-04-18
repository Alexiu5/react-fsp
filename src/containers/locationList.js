import React, { Component } from 'react';
import LocationList from '../components/LocationList'
import {connect} from 'react-redux'
import {setCity} from '../actions'
import PropTypes from 'prop-types';


class locationListContainer extends Component {
    handleCickedWeather = city => {
        this.props.setCity(city)
    }

    render() {
        return (
            <LocationList cities={this.props.cities} onClickedWeather={this.handleCickedWeather}></LocationList>
        );
    }
}

locationListContainer.propTypes = {
 setCity: PropTypes.func.isRequired,
 cities: PropTypes.array.isRequired,
};

const mapDispatchToPropsActions = dispatch =>({
    setCity: value => dispatch(setCity(value))
  })
  const AppConnected = connect(null, mapDispatchToPropsActions)(locationListContainer)
  
  export default AppConnected;