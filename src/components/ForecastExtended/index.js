import React from 'react'
import PropTypes from 'prop-types'
import ForecastItem from './forecastItem'


const printForecasts = (forecastData) => {
    debugger;
    return forecastData.map( forecast => renderForecastItemDays(forecast) )
}

const renderForecastItemDays= (forecast) =>  <ForecastItem key={`${forecast.weekDay}${forecast.hour}`} weekDay={forecast.weekDay} hour={forecast.hour} data={forecast.data} ></ForecastItem>

const renderProgress = ()=> "cargando..."


const ForecastExtended = ({city, forecastData}) =>(
    <div id="forecastContainer">
        <h2 className="detailContainer"> Forecast Extended for: {city}</h2>
        {forecastData ? printForecasts(forecastData) : renderProgress() }
    </div>
)


ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}

export default ForecastExtended