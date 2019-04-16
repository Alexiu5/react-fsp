import React from 'react'
import PropTypes from 'prop-types'
import WeatherData from '../WeatherLocation/WeatherData/'

const forecastItem = ({weekDay, hour, data})=>{
    
    return (
        <React.Fragment>
            <h3>{weekDay} Hora: {hour}Hrs.</h3>
            <WeatherData data={data}></WeatherData>
        </React.Fragment>
    )
}



forecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
}

export default forecastItem

