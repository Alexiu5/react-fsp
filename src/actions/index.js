import {api_key , url_base_forecast, url_base_weather} from '../constants/api_url'
import transformForecast from '../services/transformForecast'
import transformWeather from '../services/transformWeather'

export const SET_CITY = 'SET_CITY'
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA'

export const GET_WEATHER_CITY = 'GET_WEATHER_CITY'
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY'

const setCity = payload => ({type: SET_CITY, payload})
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload: payload})

const getWeatherCity = payload => ({type:GET_WEATHER_CITY, payload})

const setWeatherCity = payload => ({type:SET_WEATHER_CITY, payload})

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

export const setWeather = payload =>{
    return dispatch => {
        payload.forEach(city =>{
            dispatch(getWeatherCity(city))
            const url = `${url_base_weather}?q=${city}&appid=${api_key}&units=metric`
            fetch(url)
            .then(response => response.json())
            .then(response =>{
                let weather = transformWeather(response)  
                dispatch(setWeatherCity({city, weather}))
            })
        })
    }

    
}