import React from "react";
import WeatherExtraInfo from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTemperature'
import PropTypes from 'prop-types'
import './style.css'

const WeatherData = ({data : {temperature, weatherState, humidity, wind, name}})=>{
    return (
            <div className="item">
                <h2 id="cityTitle">{name ? name: 'Forecast'}</h2>
                <WeatherTemperature temperature={temperature} weatherState={weatherState} />
                <WeatherExtraInfo humidity={humidity} wind={wind}/>
            </div>
    )
}

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
        name: PropTypes.string,
    }),
}
export default WeatherData

