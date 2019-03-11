import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types'
import {
    CLOUD,
    SUNNY,
    FOG,
    HAIL,
    CLOUDWIND,
} from '../../../constants/weather'

const icons = {
    [SUNNY] : 'day-sunny',
    [FOG]: 'day-fog',
    [HAIL]: 'hail',
    [CLOUDWIND]: 'cloudy-windy',
    [CLOUD] : 'cloudy'
}

const getWeatherIcon = (weatherState) =>{
    if(weatherState === '') weatherState = 'cloudyWindy'

    const icon = icons[weatherState]
    return ( <WeatherIcons name = {icon} size="3x"/>)
}


const WeatherTemperature = ({temperature, weatherState})=>{
    return (
        <div>
            {
                getWeatherIcon(weatherState)
            }
            <span className="tempText"> {`${temperature} C°` } </span>
        </div>
    )
}

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature