import React, {Component} from 'react'
import PropType from 'prop-types'
import WeatherData from  './WeatherData'
import * as constants from '../../constants/weather'
import transformWeather from '../../services/transformWeather'
import {api_weater} from '../../constants/api_url'

class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = {
            city : 'Loading...',
            data: null
        }
    }

    componentDidMount() {
        fetch(api_weater).then(response => response.json())
        .then(response =>{
            let newWeather = transformWeather(response)       
            let {name} = response
            this.setState({
                city : name,
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
                {data ? <WeatherData data={data}></WeatherData> : ""}
            </div>
        );
    }
}


Location.propTypes = {
    city: PropType.PropTypes.string.isRequired,
}
export default WeatherLocation