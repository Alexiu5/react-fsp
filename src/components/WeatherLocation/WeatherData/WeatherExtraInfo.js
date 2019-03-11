import React from 'react'
import PropType from 'prop-types'

const WeatherExtraInfo = ({humidity, wind}) => {
    return (
        <div className="weatherExtraInfo">
            <span>{`${humidity}% - ${wind} `}</span>
        </div>)
}

WeatherExtraInfo.propTypes = {
    humidity: PropType.number.isRequired,
    wind: PropType.string
}

export default WeatherExtraInfo