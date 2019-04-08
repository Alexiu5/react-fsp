import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ForecastItem from './forecastItem'
import {api_key , url_base_forecast} from '../../constants/api_url'
import transformForecast from '../../services/transformForecast'

class ForecastExtended extends Component {
    constructor(){
        super()
        this.state = {forecastData: null}
    }

    componentDidMount(){
        this.updateCity(this.props.city)
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.city != nextProps.city){
            this.setState({forecastData:null})
            this.updateCity(nextProps.city)
        }
    }
    

    updateCity = city =>{
        //fetch or axios for weather map
        const url_forecast = `${url_base_forecast}?q=${city}&appid=${api_key}&units=metric`
        fetch(url_forecast)
            .then((response)=> response.json())
            .then(response => {
                const forecastData = transformForecast(response)
                console.log(forecastData)
                this.setState({forecastData})
            })
            .catch((error)=>{
                console.error('Error fetching forecast weather' + error)
            })
    }

    printForecasts = () => this.state.forecastData.map( forecast => this.renderForecastItemDays(forecast) )

    renderForecastItemDays= (forecast) =>  <ForecastItem key={`${forecast.weekDay}${forecast.hour}`} weekDay={forecast.weekDay} hour={forecast.hour} data={forecast.data} ></ForecastItem>

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