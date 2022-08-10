function Details(props) {
  const weather = props.weather;
  return (
    <div>
      <h4>Cloud Cover: {weather.daily[0].values.cloudCover}%</h4>
      <h4>Humidity: {weather.daily[0].values.humidity}</h4>
      <h4>Moon Phase: {weather.daily[0].values.moonPhase}</h4>
      <h4>Precipitation: {weather.daily[0].values.precipitationProbability}</h4>
      <h4>Rain or Snow: {weather.daily[0].values.precipitationType}</h4>
      <h4>Sunrise: {weather.daily[0].values.sunriseTime}</h4>
      <h4>Sunset: {weather.daily[0].values.sunsetTime}</h4>
      <h4>Temperature: {weather.daily[0].values.temperature}</h4>
      <h4>UV Health Concern: {weather.daily[0].values.uvHealthConcern}</h4>
      <h4>UV Index: {weather.daily[0].values.uvIndex}</h4>
      <h4>Visibility: {weather.daily[0].values.visibility}</h4>
      <h4>Weather Code: {weather.daily[0].values.weatherCodeDay}</h4>
      <h4>Weather Code Night: {weather.daily[0].values.weatherCodeNight}</h4>
      <h4>Wind Gusts: {weather.daily[0].values.windGust}</h4>
      <h4>Wind Speed: {weather.daily[0].values.windSpeed}</h4>
    </div>
  )
}

export default Details;