function CurrentWeather(props) {
  const weather = props.weather;
  const city = props.city;

  return (
    <div>
      <h2>{city}</h2>
      <div>
        <h4>{weather.weatherCodeDay}</h4>
      </div>
      <div>
        <h3>{weather.hourly[0].temperature}</h3>
        <h5>Low: {weather.daily[0].temperatureMin}</h5>
        <h5>High: {weather.daily[0].temperatureMax}</h5>
      </div>
    </div>
  )
}

export default CurrentWeather;
