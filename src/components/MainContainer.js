import { weatherCodeDay, weatherCodeNight } from "../data/data";

function MainContainer(props) {
  const weather = props.weather;
  // switch to weatherCodeFullDay instead of weatherCodeDay?
  const weatherCode = weather.daily[0].values.weatherCodeDay;
  return (
    <div className="main-container">
      <div className="city-search-container">
        <input
          type="text"
          placeholder="Search City or Zip"
        />
        <h2 className="city">Honolulu</h2>
        {/* start input as seach Icon -> onClick show input field */}
      </div>
      <div>
        <div>Weather Icon</div>
        <h4>{weatherCodeDay[weatherCode]}</h4>
      </div>
      <div>
        {/* Change hardcoded hourly/daily index into dynamic index when appropriate */}
        <h3>{Math.round(weather.hourly[0].values.temperature)}&deg;</h3>
        <h5>Low: {Math.round(weather.daily[0].values.temperatureMin)}&deg;</h5>
        <h5>High: {Math.round(weather.daily[0].values.temperatureMax)}&deg;</h5>
      </div>
      <div>
        {/* list container for Additional weather detail options. Render each item component here */}
      </div>
    </div >
  )
}

export default MainContainer;
