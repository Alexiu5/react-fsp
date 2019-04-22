import React, { Component } from 'react';
import LocationList from '../components/LocationList'
import {connect} from 'react-redux'
import { setSelectedCity, setWeather } from '../actions/index'
import PropTypes from 'prop-types';
import {getWeatherCities} from '../reducers/'

class locationListContainer extends Component {
    constructor(){
        super();
        // this.props.setWeather(this.props.cities)
    }

    handleCickedWeather = city => {
        this.props.setCity(city)
    }

    render() {
        return (
            <LocationList cities={this.props.citiesWeather} onClickedWeather={this.handleCickedWeather}></LocationList>
        );
    }
}

locationListContainer.propTypes = {
 setCity: PropTypes.func.isRequired,
 cities: PropTypes.array.isRequired, 
 citiesWeather: PropTypes.array,
};

const mapDispatchToPropsActions = dispatch =>({
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities))
})

const mapStateToProps = state =>({
    citiesWeather: getWeatherCities(state)
})
const AppConnected = connect(mapStateToProps, mapDispatchToPropsActions)(locationListContainer)
  
export default AppConnected;