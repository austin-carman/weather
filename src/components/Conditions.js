import { moonPhases, precipitation, uvHealthRisk, getWindDirection } from "../data/data";

function Conditions(props) {
  const weather = props.weather;
  const setCondition = props.setCondition;

  return (
    <div>
      <div onClick={() => setCondition("temperature")}>
        <h4>Temperature:</h4>
        <div>{weather.icon}</div>
        <h4>{weather.temperature}</h4>
        <h5>Low: {weather.temperatureMin}</h5>
        <h5>High: {weather.temperatureMax}</h5>
      </div>
      <div onClick={() => setCondition("cloudCover")}>
        <h4>Cloud Cover:</h4>
        <div>Icon</div>
        <h5>{weather.conditions.cloudCover}%</h5>
      </div>
      <div onClick={() => setCondition("humidity")}>
        <h4>Humidity:</h4>
        <div>Icon</div>
        <h5>{weather.conditions.humidity}%</h5>
      </div>
      <div onClick={() => setCondition("moonPhase")}>
        <h4>Moon Phase:</h4>
        <div>Icon</div>
        <h5>{moonPhases[weather.conditions.moonPhase]}</h5>
      </div>
      <div onClick={() => setCondition("precipitationProbability")}>
        <h4>{weather.conditions.precipitationType > 0 ? precipitation[weather.conditions.precipitationType] : "Precipitation"}:</h4>
        <div>Icon</div>
        <h5>{weather.conditions.precipitationProbability}%</h5>
      </div>
      <div onClick={() => setCondition("sunriseTime")}>
        <div>Icon</div>
        <h5>Sunrise: {new Date(weather.conditions.sunriseTime).toLocaleTimeString([], { hour: "numeric", minute: "numeric" })}</h5>
        <h5>Sunset: {new Date(weather.conditions.sunsetTime).toLocaleTimeString([], { hour: "numeric", minute: "numeric" })}</h5>
      </div>
      <div onClick={() => setCondition("uvIndex")}>
        <h4>UV:</h4>
        <div>Icon</div>
        <h5>{weather.conditions.uvIndex}</h5>
        <h5>{uvHealthRisk[weather.conditions.uvIndex]}</h5>
      </div>
      <div onClick={() => setCondition("visibility")}>
        <h4>Visibility:</h4>
        <div>Icon</div>
        <h5>{Math.round(weather.conditions.visibility)} mi</h5>
      </div>
      <div onClick={() => setCondition("windSpeed")}>
        <h4>Wind:</h4>
        <div>Icon</div>
        <h5>{Math.round(weather.conditions.windSpeed)} mph</h5>
        <h5>{getWindDirection(weather.conditions.windDirection)}</h5>
      </div>
    </div>
  )
}

export default Conditions;