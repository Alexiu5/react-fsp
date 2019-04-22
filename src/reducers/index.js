import { combineReducers } from 'redux'
import { city } from './city'
import { cities } from './cities'
import {getForecastDataFromCities as _getForecastDataFromCities  } from './cities'
export default combineReducers({
    city,
    cities
})


export const getForecastDataFromCities = state => (_getForecastDataFromCities(state.cities, getCity(state)))
export const getCity = state => state.city