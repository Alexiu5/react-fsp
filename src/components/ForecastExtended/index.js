import React, {Component} from 'react'
import PropTypes from 'prop-types'
class ForecastExtended extends Component {
    render(){
        const {city} = this.props
        return (
            <div className="detailContainer"> Forecast Extended de: {city}</div>
        )
    }
}



ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended