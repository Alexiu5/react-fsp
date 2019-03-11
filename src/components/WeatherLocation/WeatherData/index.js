import React from "react";
import WeatherExtraInfo from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTemperature'
import PropTypes from 'prop-types'
import './style.css'

const WeatherData = ({data : {temperature, weatherState, humidity, wind}})=>{
    return (
        <div className="weatherDataContainer">
            <div className="item">
                <WeatherTemperature temperature={temperature} weatherState={weatherState} />
                <WeatherExtraInfo humidity={humidity} wind={wind}/>
            </div>
        </div>
    )
}

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}
export default WeatherData

