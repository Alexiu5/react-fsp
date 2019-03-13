import React from 'react'
import Location from './WeatherLocation'
import PropTypes from 'prop-types'
import './locationList.css'



const LocationList = ({cities, onClickedWeather})=>{

    const handleWeatherClick = city =>{
        onClickedWeather(city)
    }

    const getLstComponents = cities => (cities.map(city => {
       return (
        <Location 
            key={city} 
            city={city}
            onWeatherClick= {()=> handleWeatherClick(city)}></Location>
        )
    }))
    


    return (
        <div className="LocationContainer">
            {getLstComponents(cities)}
        </div>)
}

LocationList.propType = {
    cities: PropTypes.array.isRequired,
    onClickedWeather:PropTypes.func,
}

export default LocationList