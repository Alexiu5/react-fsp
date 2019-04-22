import {api_key , url_base_forecast} from '../constants/api_url'
import transformForecast from '../services/transformForecast'


export const SET_CITY = 'SET_CITY'
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA'

const setCity = payload => ({type: SET_CITY, payload})
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload: payload})

export const setSelectedCity = payload => {
    return dispatch => {
        const url_forecast = `${url_base_forecast}?q=${payload}&appid=${api_key}&units=metric`
        dispatch(setCity(payload))
        fetch(url_forecast)
            .then((response)=> response.json())
            .then(response => {
                const forecastData = transformForecast(response)
                dispatch(setForecastData({city : response.city.name, forecastData}))
            })
            .catch((error)=>{
                console.error('Error in fetching selected city' + error)
            })
        return
    }
}