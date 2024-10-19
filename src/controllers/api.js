const apiKey = "T733FBTX9Q7J4EG5DY5Y7LLSU";

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

class WeatherAPI {
    constructor(location, key, element) {
        this.location = location;
        this.key = key;
        this.weatherData = null; // Property to store weather data after the first call
        this.todaysWeatherContainer = document.querySelector(element);
    }

    fetchAllWeatherData = async () => {
        if (!this.weatherData) { // Check if data has already been fetched
            console.log("Fetching weather data for:", this.location);
            const weatherEndpoint = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.location}?unitGroup=metric&key=${this.key}&contentType=json`;
            const response = await fetch(weatherEndpoint, { mode: 'cors' });
            this.weatherData = await response.json(); // Save the data in the class property
        } else {
            console.log("Using cached weather data for:", this.location);
        }

        return this.weatherData; // Return the stored weather data
    }


    // NEEDS To BE CONVERTED TO FARENHEIT
    getCurrentTemperature = () => {
        if (this.weatherData) {
            return celsiusToFahrenheit(this.weatherData.currentConditions.temp);
        } else {
            console.log("Weather data not fetched yet.");
            return null;
        }
    }
    getCurrentFeelsLike = () => {
        if (this.weatherData) {
            return this.weatherData.currentConditions.feelslike;
        } else {
            console.log("Weather data not fetched yet.");
            return null;
        }
    }

    getTodayMaxTemp = () => {
        if (this.weatherData) {
            return this.weatherData.days[0].tempmax;
        } else {
            console.log("Weather data not fetched yet.");
            return null;
        }
    }

    getTomorrowForecast = () => {
        if (this.weatherData) {
            const tomorrowForecast = this.weatherData.days[1];
            return {
                date: tomorrowForecast.datetime,
                maxTemp: tomorrowForecast.tempmax,
                minTemp: tomorrowForecast.tempmin,
                conditions: tomorrowForecast.conditions
            };
        } else {
            console.log("Weather data not fetched yet.");
            return null;
        }
    }
    
    // TO BE REMOVED
    displayWeather = async () => {
        const weatherData = await this.fetchAllWeatherData();
        const currentTemp = celsiusToFahrenheit(weatherData.currentConditions.temp);
        const description = weatherData.description;


        this.todaysWeatherContainer.innerHTML = `<p>Current temperature: ${currentTemp}°F</p>
                                    <p>Conditions: ${description}</p>`;
    }
}




// const APITestCall = new WeatherAPI('New York', apiKey);

// APITestCall.fetchAllWeatherData().then(data => {
//     console.log("Data fetched:", data.weatherData);
//     }).catch(error => {
//     console.error("Error:", error);
// });


export { 
    WeatherAPI,
    apiKey 
};
