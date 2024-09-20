const apiKey = "T733FBTX9Q7J4EG5DY5Y7LLSU";


const fetchData = async (target, key) => {
    const weatherEndpoint = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${target}?unitGroup=metric&key=${key}&contentType=json`
    const response = await fetch(weatherEndpoint, {mode : 'cors'} )
    const weatherData = await response.json()
    return weatherData
}

const fetched = fetchData('Meriden', apiKey)
console.log(fetched)

export {
    fetched
}