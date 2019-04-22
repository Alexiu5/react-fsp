import { SET_FORECAST_DATA, GET_WEATHER_CITY, SET_WEATHER_CITY } from '../actions'
import { createSelector } from 'reselect'

export const cities = (state = {}, action)=>{
    switch (action.type) {
        case SET_FORECAST_DATA: {
            const {city, forecastData} = action.payload
            const cityFormated = `${city}, col`
            return {...state, [cityFormated]:{forecastData}}
        }

        case GET_WEATHER_CITY:{
            const city = action.payload
            return {...state, [city]: {weather:null}}
        }
        case SET_WEATHER_CITY:{
            const {city, weather} = action.payload
            return {...state, [city]:{ weather }}
        }
        default:
            return state
    }
}


export const getForecastDataFromCities = createSelector((state, city) => state[city] && state[city].forecastData, forecastData => forecastData)
export const getWeatherCities = createSelector(state => [], cities => cities )