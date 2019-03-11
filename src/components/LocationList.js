import React from 'react'
import Location from './WeatherLocation'
import PropTypes from 'prop-types'


const getLstComponents = cities => (cities.map(city => <Location city={city}></Location>))
const LocationList = ({cities})=>{
    return (
        <div>
            {getLstComponents(cities)}
        </div>)
}

LocationList.propType = {
    cities: PropTypes.array.isRequired
}

export default LocationList