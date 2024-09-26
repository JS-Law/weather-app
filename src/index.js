import './styles.css'
import 'material-icons/iconfont/material-icons.css';
import 'material-symbols';
import { fetched } from './controllers/api';
import { WeatherIcon } from './controllers/uicontroller';
// console.log(fetched)

let testWeatherIcon = new WeatherIcon('#todays-date-weather', 'rainy');
testWeatherIcon.appendWeatherIcon()

