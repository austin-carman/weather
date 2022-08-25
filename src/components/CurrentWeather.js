function CurrentWeather(props) {
  const weather = props.weather;
  const city = props.city;

  const date = new Date(weather.hourly[0].startTime);
  const time = date.toLocaleTimeString([], { hour: 'numeric', hour12: false });
  const timeInt = parseInt(time);

  return (
    <div>
      <h2>{city}</h2>
      <div>
        {/* <h4>{weather.weatherCodeDay}</h4> */}
        {(timeInt > 5 && timeInt < 22) ? <h4>{weather.weatherCodeDay}</h4> : <h4>{weather.weatherCodeNight}</h4>}
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
