function CurrentWeather(props) {
  const weather = props.weather;
  const city = props.city;
  // switch to weatherCodeFullDay instead of weatherCodeDay?

  return (
    <div>
      <h2>{city}</h2>
      <div>
        <div>{weather.icon}</div>
        <h4>{weather.weatherCodeDay}</h4>
      </div>
      <div>
        <h3>{weather.temperature}</h3>
        <h5>Low: {weather.temperatureMin}</h5>
        <h5>High: {weather.temperatureMax}</h5>
      </div>
    </div>
  )
}

export default CurrentWeather;
