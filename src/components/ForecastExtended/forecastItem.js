import React from 'react'
import PropTypes from 'prop-types'
import WeatherData from '../WeatherLocation/WeatherData/'
import * as constants from  '../../constants/weather'

const forecastItem = ({weekDay, hour})=>{
    const data =  {
        temperature: 10,
        weatherState:constants.CLOUD,
        humidity:25,
        wind:'12',
        name: `${weekDay}`
    }
    
    return (
        <div>
            <WeatherData data={data}></WeatherData>
        </div>
    )
}



forecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
}

export default forecastItem

