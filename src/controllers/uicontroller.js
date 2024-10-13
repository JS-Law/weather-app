import { WeatherAPI, apiKey } from "./api";


class WeatherIcon {
    constructor(element, icon){
        this.element = document.querySelector(element);
        this.icon = icon
    }

    appendWeatherIcon(){
        this.element.textContent = this.icon
    }

}

class WeatherData {
    constructor(element, data){
        this.element = document.querySelector(element);
        this.data = data;
    }

    appendWeatherData(){
        this.element.textContent = this.data
    }
}


let locationInput = document.querySelector('#search-city-input');
let searchBtn = document.querySelector('#search-button');
let weatherContainer = document.querySelector('#todays-weather-forecast');


searchBtn.addEventListener('click', () => {
    const location = locationInput.value;

    if(location){
        const weatherCall = new WeatherAPI(location, apiKey, '#todays-weather-forecast')
        weatherCall.displayWeather()
    } else {
        weatherContainer.innerHTML = '<p>Please enter a location</p>';
    }
})





export {
    WeatherIcon,
    WeatherData
}