import * as constants from '../constants/weather'

const getWeatherState = weather_data=>{
    return constants.CLOUD
}

const transformWeather = weather_data=>{
    const {humidity, temp} = weather_data.main
    const {speed} = weather_data.wind
    const state = getWeatherState(weather_data);

    const data = {
        temperature : temp,
        weatherState :state,
        humidity:humidity ,
        wind: `${speed} m/s`
    }

    return data
}


export default transformWeather