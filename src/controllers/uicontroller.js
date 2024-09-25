class WeatherIcon {
    constructor(element, icon){
        this.element = document.querySelector(element);
        this.icon = icon
    }

    appendWeatherIcon(){
        this.element.textContent = this.icon
    }
}