import './styles.css'
import 'material-icons/iconfont/material-icons.css';
import { fetched } from './controllers/api';
import { WeatherIcon } from './controllers/uicontroller';
// console.log(fetched)

let testWeatherIcon = new WeatherIcon('#todays-weather-forecast', 'rainy');
testWeatherIcon.appendWeatherIcon()

