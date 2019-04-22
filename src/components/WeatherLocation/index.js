import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import React from 'react';
import WeatherData from './WeatherData';

export const WeatherLocation = ({onWeatherClick, city, data})=> (
    <div onClick={onWeatherClick} >
        {data ? <WeatherData data={data}></WeatherData> : <CircularProgress/>}
    </div>
)

Location.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
        name: PropTypes.string,
    }),
}
export default WeatherLocation