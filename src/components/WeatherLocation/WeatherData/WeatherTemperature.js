import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types'
import {
    CLOUD,
    SUNNY,
    FOG,
    HAIL,
    CLOUDWIND,
    THUNDER,
    SNOW,
    DRIZZLE,
    RAIN
} from '../../../constants/weather'

const icons = {
    [CLOUD] : 'cloudy',
    [SUNNY] : 'day-sunny',
    [FOG]: 'day-fog',
    [HAIL]: 'hail',
    [CLOUDWIND]: 'cloudy-windy',
    [THUNDER] : 'day-thunder',
    [SNOW]: 'snow',
    [DRIZZLE]: 'day-showers',
    [RAIN]:'rain'
}

const getWeatherIcon = (weatherState) =>{
    if(weatherState === '') weatherState = 'cloudyWindy'

    const icon = icons[weatherState]
    return ( <WeatherIcons name = {icon} size="2x"/>)
}


const WeatherTemperature = ({temperature, weatherState})=>{
    return (
        <div className="icon-item" id="icon-item"> 
           <span>
           {
                getWeatherIcon(weatherState)
            }
            <span className="tempText"> {`${temperature} C°` } </span>
           </span>
        </div>
    )
}

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature