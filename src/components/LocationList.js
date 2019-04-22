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
            key={city.key} 
            city={city.name}
            onWeatherClick= {()=> handleWeatherClick(city.name)}
            data={city.data}></Location>
        )
    }))
    


    return (
        <div>
            {getLstComponents(cities)}
        </div>)
}

LocationList.propType = {
    cities: PropTypes.array.isRequired,
    onClickedWeather:PropTypes.func,
}

export default LocationList