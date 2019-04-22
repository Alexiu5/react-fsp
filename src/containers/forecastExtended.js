import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import ForecastExtended from './../components/ForecastExtended/'

class forecastExtendedContainer extends Component {
    render() {
        const {city, forecastData} = this.props
        console.log(this.props)
        return (
            city && <ForecastExtended city={city} forecastData={forecastData}></ForecastExtended>
        );
    }
}

forecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
};

// export default forecastExtendedContainer;
const mapStateToProps = ({city, cities}) => ({
    city,
    forecastData: cities[city] && cities[city].forecastData
})
export default connect(mapStateToProps, null)(forecastExtendedContainer)