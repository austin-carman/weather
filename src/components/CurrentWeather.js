function CurrentWeather(props) {
  const weather = props.weather;
  // switch to weatherCodeFullDay instead of weatherCodeDay?

  return (
    <div>
      <h2 className="city">Honolulu</h2>
      <div>
        <div>Weather Icon</div>
        <h4>{weather.weatherCodeDay}</h4>
      </div>
      <div>
        <h3>{weather.temperature}&deg;</h3>
        <h5>Low: {weather.temperatureMin}&deg;</h5>
        <h5>High: {weather.temperatureMax}&deg;</h5>
      </div>
    </div>
  )
}

export default CurrentWeather;
