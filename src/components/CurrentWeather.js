import { weatherCodeDay } from "../data/data";

function CurrentWeather(props) {
  const weather = props.weather;
  // switch to weatherCodeFullDay instead of weatherCodeDay?
  // create obj key in state instead of doing this
  const weatherCode = weather.daily[0].values.weatherCodeDay;

  return (
    <div>
      <h2 className="city">Honolulu</h2>
      <div>
        <div>Weather Icon</div>
        <h4>{weatherCodeDay[weatherCode]}</h4>
      </div>
      <div>
        <h3>{Math.floor(weather.hourly[0].values.temperature)}&deg;</h3>
        <h5>Low: {Math.floor(weather.daily[0].values.temperatureMin)}&deg;</h5>
        <h5>High: {Math.floor(weather.daily[0].values.temperatureMax)}&deg;</h5>
      </div>
    </div>
  )
}

export default CurrentWeather;
