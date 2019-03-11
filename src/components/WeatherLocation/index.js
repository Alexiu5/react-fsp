import React, {Component} from 'react'
import PropType from 'prop-types'
import WeatherData from  './WeatherData'
import * as constants from '../../constants/weather'
import transformWeather from '../../services/transformWeather'


const data = {
    temperature : 5,
    weatherState :constants.SUNNY,
    humidity: 10,
    wind: '10 m/s'
}

const location = 'London'
const api_key = '85c426a7a9490e80f373a95533e1ac25'
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather'

const api_weater = `${url_base_weather}?q=${location}&appid=${api_key}&units=metric`

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