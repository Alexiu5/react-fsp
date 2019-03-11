import * as constants from '../constants/weather'

const getWeatherState = ({id}) =>{
    if(id < 300) return constants.THUNDER
    else if (id < 400) return constants.DRIZZLE
    else if (id < 600) return constants.RAIN
    else if (id < 700) return constants.SNOW
    else if (id === 800) return constants.SUNNY
    else return constants.CLOUD
}

const transformWeather = weather_data=>{
    const {humidity, temp} = weather_data.main
    const {speed} = weather_data.wind
    const state = getWeatherState(weather_data.weather[0]);

    const data = {
        temperature : temp,
        weatherState :state,
        humidity:humidity ,
        wind: `${speed} m/s`
    }

    return data
}


export default transformWeather