import React from 'react'
import PropTypes from 'prop-types'
import WeatherData from '../WeatherLocation/WeatherData/'

const forecastItem = ({weekDay, hour, data})=>{
    
    return (
        <div>
            <h3>{weekDay} Hora: {hour}Hrs.</h3>
            <WeatherData data={data}></WeatherData>
        </div>
    )
}



forecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
}

export default forecastItem

