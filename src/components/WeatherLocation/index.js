import React, {Component} from 'react'
import PropType from 'prop-types'
import WeatherData from  './WeatherData'
import * as constants from '../../constants/weather'
import transformWeather from '../../services/transformWeather'
import {api_weater} from '../../constants/api_url'

const data = {
    temperature : 5,
    weatherState :constants.SUNNY,
    humidity: 10,
    wind: '10 m/s'
}

class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = {
            city : 'Medellín',
            data: data
        }
    }

    handleUpdateClick = ()=>{
        fetch(api_weater).then(response => response.json())
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
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualiar</button>
            </div>
        );
    }
}


Location.propTypes = {
    city: PropType.PropTypes.string.isRequired,
}
export default WeatherLocation