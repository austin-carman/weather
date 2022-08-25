function Conditions(props) {
  const weather = props.weather;
  const setConditions = props.setConditions;

  // try to change this to mirror forecast list/forecast item
  return (
    <div>
      <div onClick={() => setConditions(["temperature", "temperatureMin", "temperatureMax"])}>
        <h4>Temperature:</h4>
        <h4>{weather.hourly[0].temperature}</h4>
        <h4>{weather.daily[0].temperatureMin}</h4>
        <h4>{weather.daily[0].temperatureMax}</h4>
      </div>
      <div onClick={() => setConditions(["cloudCover"])}>
        <h4>Cloud Cover:</h4>
        <div>Icon</div>
        <h5>{weather.hourly[0].cloudCover}</h5>
      </div>
      <div onClick={() => setConditions(["humidity"])}>
        <h4>Humidity:</h4>
        <div>Icon</div>
        <h5>{weather.hourly[0].humidity}</h5>
      </div>
      <div onClick={() => setConditions(["moonPhase"])}>
        <h4>Moon Phase:</h4>
        <div>Icon</div>
        <h5>{weather.daily[0].moonPhase}</h5>
      </div>
      <div onClick={() => setConditions(["precipitationType", "precipitationProbability"])}>
        <h4>{weather.hourly[0].precipitationType}</h4>
        <div>Icon</div>
        <h5>{weather.hourly[0].precipitationProbability}</h5>
      </div>
      <div onClick={() => setConditions(["sunriseTime", "sunsetTime"])}>
        <div>Icon</div>
        <h5>Sunrise: {weather.hourly[0].sunriseTime}</h5>
        <h5>Sunset: {weather.hourly[0].sunsetTime}</h5>
      </div>
      <div onClick={() => setConditions(["uvIndex", "uvHealthConcern"])}>
        <h4>UV:</h4>
        <div>Icon</div>
        <h5>{weather.hourly[0].uvIndex}</h5>
        <h5>{weather.hourly[0].uvHealthConcern}</h5>
      </div>
      <div onClick={() => setConditions(["visibility"])}>
        <h4>Visibility:</h4>
        <div>Icon</div>
        <h5>{weather.hourly[0].visibility}</h5>
      </div>
      <div onClick={() => setConditions(["windSpeed", "windDirection"])}>
        <h4>Wind:</h4>
        <div>Icon</div>
        <h5>{weather.hourly[0].windSpeed}</h5>
        <h5>{weather.hourly[0].windDirection}</h5>
      </div>
    </div>
  )
}

export default Conditions;