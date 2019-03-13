import PropTypes from 'prop-types';
import React, { Component } from 'react';
import transformWeather from '../../services/transformWeather';
import WeatherData from './WeatherData';
import CircularProgress from '@material-ui/core/CircularProgress'
import ApiUrl from '../../services/getWeatherByCity_url'

class WeatherLocation extends Component {
    constructor(props){
        super(props);
        const {city} = props
        this.state = {city, data: null}
    } 

    componentDidMount() {
        let url = ApiUrl(this.state.city)
        fetch(url).then(response => response.json())
        .then(response =>{
            let newWeather = transformWeather(response)       
            this.setState({
                data : newWeather
            })
        })
        .catch(error=>{
            console.error(error)
        })
    }

    
    render(){ 
        const { onWeatherClick } = this.props
        const { data } = this.state
        return (
            <div onClick={onWeatherClick} >
                {data ? <WeatherData data={data}></WeatherData> : <CircularProgress/>}
            </div>
        );
    }
}


Location.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherClick: PropTypes.func,
}
export default WeatherLocation