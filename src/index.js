import './styles.css'
import 'material-icons/iconfont/material-icons.css';
import 'material-symbols';
import { WeatherIcon, WeatherData } from './controllers/uicontroller';
import{WeatherAPI} from './controllers/api.js';

let testWeatherIcon = new WeatherIcon('#todays-date-weather', 'rainy');
testWeatherIcon.appendWeatherIcon()

// const APITestCall = new WeatherAPI('New York', apiKey);

// APITestCall.fetchAllWeatherData().then(data => {
//     console.log("Data fetched:", data.weatherData);
//     }).catch(error => {
//     console.error("Error:", error);
// });

// let testData = fetched

// console.table(testData)
// console.log(testData.address)
