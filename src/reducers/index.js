import { combineReducers } from 'redux'
import { city } from './city'
import { cities } from './cities'
import {getForecastDataFromCities as _getForecastDataFromCities , getWeatherCities as _getWeatherCities } from './cities'
import {createSelector} from 'reselect'
export default combineReducers({
    city,
    cities
})



export const getCity = createSelector(state => state.city, city => city)
export const getForecastDataFromCities = createSelector(state => state.cities, getCity, _getForecastDataFromCities)
export const getWeatherCities = createSelector(state => state.cities, _getWeatherCities )