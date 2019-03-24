import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ForecastItem from './forecastItem'


const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves','Viernes']
class ForecastExtended extends Component {
    renderForecastItemDays = (day) => <ForecastItem weekDay={day} hour={10}></ForecastItem>

    render(){
        const {city} = this.props
        return (
            <div>
                <h2 className="detailContainer"> Forecast Extended for: {city}</h2>
                {days.map(elm => this.renderForecastItemDays(elm))}
            </div>
        )
    }
}


ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended