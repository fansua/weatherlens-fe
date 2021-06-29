
const LOCATION_URL = `http://localhost:3005/location?address=`
const FORECAST_URL = `http://localhost:3006/forecast`

export  const fetchForecastReport = async (address) => {
    console.log(`Fetching weather information`)

    const locationData = await fetchLocationData(address)
    console.log(` HELLOW -> ${locationData.location}, - ${locationData.latitude},  -${locationData.longitude} response data`)
    const foreCastResponse = await fetchWeatherData(locationData.latitude,locationData.longitude)

    console.log(`${foreCastResponse.temperature}, ${foreCastResponse.weatherDescription}, 
    ${foreCastResponse.windSpeed}, ${foreCastResponse.windDegree}, ${foreCastResponse.windDirection}, ${foreCastResponse.feelsLike} response data`)

    return {
        ...locationData,
        ...foreCastResponse
    }
}


export  const fetchLocationData = async (location) => {

    console.log(`Fetching location information`)
    try {
        const response = await fetch(LOCATION_URL+location, {method: 'GET', headers:{ 'Accept': 'application/json'}})
        const data = await response.json()
        console.log(`successfully fetched location information`)
        return { 
            latitude:data.latitude,
            longitude:data.longitude,
            location:data.location
        }
    } catch(e) {
        console.log(`failed to fetch location information`)
        console.log(`${e}`)
    }
}

const fetchWeatherData = async(latitude,longitude) => {

    console.log(`Fetching weather details`)

    const URL = `${FORECAST_URL}?latitude=${latitude}&longitude=${longitude}`
    try {
        const response = await fetch(URL, {method: 'GET', headers:{ 'Accept': 'application/json'}})
        const data = await response.json()
        console.log(`successfully fetched weather detials`)
        return { 
            temperature: data.temperature,
            weatherDescription: data.weatherDescription,
            windSpeed: data.windSpeed,
            windDegree: data.windDegree,
            windDirection: data.windDirection,
            feelsLike: data.feelsLike
        }
    } catch(e) {
        console.log(`failed to fetch weather details`)
        console.log(`${e}`)
    }
}