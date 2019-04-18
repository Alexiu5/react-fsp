import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import ForecastExtended from './../components/ForecastExtended/'

class forecastExtendedContainer extends Component {
    render() {
        return (
            this.props.city && <ForecastExtended city={this.props.city}></ForecastExtended>
        );
    }
}

forecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
};

// export default forecastExtendedContainer;
const mapStateToProps = ({city}) => ({
    city
})
export default connect(mapStateToProps, null)(forecastExtendedContainer)