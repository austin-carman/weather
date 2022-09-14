import { moonPhases } from "../data/data";

// Current weather conditions
function Conditions(props) {
  const weather = props.weather;
  const setConditions = props.setConditions;

  const MoonIcon = moonPhases[weather.daily[0].moonPhase].icon;

  return (
    <div>
      <div onClick={() => setConditions(["temperature", "temperatureMin", "temperatureMax"])}>
        <h4>Temperature:</h4>
        <i className="bi bi-thermometer-half"></i>
        <h4>{weather.hourly[0].temperature}</h4>
        <h4>{weather.daily[0].temperatureMin}</h4>
        <h4>{weather.daily[0].temperatureMax}</h4>
      </div>
      <div onClick={() => setConditions(["cloudCover"])}>
        <h4>Cloud Cover:</h4>
        <i className="bi bi-clouds"></i>
        <h5>{weather.hourly[0].cloudCover}</h5>
      </div>
      <div onClick={() => setConditions(["humidity"])}>
        <h4>Humidity:</h4>
        <i className="bi bi-moisture"></i>
        <h5>{weather.hourly[0].humidity}</h5>
      </div>
      <div onClick={() => setConditions(["moonPhase"])}>
        <h4>Moon Phase:</h4>
        <MoonIcon />
        <h5>{moonPhases[weather.daily[0].moonPhase].phase}</h5>
      </div>
      <div onClick={() => setConditions(["precipitationType", "precipitationProbability"])}>
        <h4>{weather.daily[0].precipitationType}</h4>
        {weather.daily[0].precipitationType === "Snow" ? <i className="bi bi-cloud-snow"></i> : <i className="bi bi-cloud-rain"></i>}
        <h5>{weather.hourly[0].precipitationProbability}</h5>
      </div>
      <div onClick={() => setConditions(["sunriseTime", "sunsetTime"])}>
        <h5>Sunrise:</h5>
        <i className="bi bi-sunrise"></i>
        <h6>{weather.hourly[0].sunriseTime}</h6>
        <h5>Sunset:</h5>
        <i className="bi bi-sunset"></i>
        <h6>{weather.hourly[0].sunsetTime}</h6>
      </div>
      <div onClick={() => setConditions(["uvIndex", "uvHealthConcern"])}>
        <h4>UV Index:</h4>
        <i className="bi bi-sun"></i>
        <h5>{weather.hourly[0].uvIndex}</h5>
        <h5>{weather.hourly[0].uvHealthConcern}</h5>
      </div>
      <div onClick={() => setConditions(["visibility"])}>
        <h4>Visibility:</h4>
        <i className="bi bi-eye"></i>
        <h5>{weather.hourly[0].visibility}</h5>
      </div>
      <div onClick={() => setConditions(["windSpeed", "windDirection"])}>
        <h4>Wind:</h4>
        <i className="bi bi-wind"></i>
        <h5>{weather.hourly[0].windSpeed}</h5>
        <h5>{weather.hourly[0].windDirection}</h5>
      </div>
    </div>
  )
}

export default Conditions;
