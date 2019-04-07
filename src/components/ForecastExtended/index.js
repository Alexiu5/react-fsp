import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ForecastItem from './forecastItem'
import {api_key , url_base_forecast} from '../../constants/api_url'
import transformForecast from '../../services/transformForecast'

const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves','Viernes']

class ForecastExtended extends Component {
    constructor(){
        super()
        this.state = {forecastData: null}
    }

    componentDidMount(){
        //fetch or axios for weather map
        const url_forecast = `${url_base_forecast}?q=${this.props.city}&appid=${api_key}`
        fetch(url_forecast)
            .then((response)=> response.json)
            .then(response => {
                debugger;
                const forecastData = transformForecast(response)
                this.setState({forecastData})
            })
            .catch((error)=>{
                console.error('Error fetching forecast weather' + error)
            })
    }

    renderForecastItemDays= (day) =>  <ForecastItem weekDay={day} hour={10}></ForecastItem>

    printForecasts = () => days.map( elm => this.renderForecastItemDays(elm) )

    renderProgress = ()=> "cargando..."

    render(){
        const {city} = this.props
        const {forecastData} = this.state
        return (
            <React.Fragment>
                <h2 className="detailContainer"> Forecast Extended for: {city}</h2>
                {forecastData ? this.printForecasts() : this.renderProgress() }
            </React.Fragment>
        )
    }
}


ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended