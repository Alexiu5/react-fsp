import PropType from 'prop-types';
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
        const  {city, data}  = this.state
        return (
            
            <div>
                <h1>{city}</h1>
                {data ? <WeatherData data={data}></WeatherData> : <CircularProgress/>}
            </div>
        );
    }
}


Location.propTypes = {
    city: PropType.PropTypes.string.isRequired,
}
export default WeatherLocation