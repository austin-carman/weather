import { weatherIcons } from "../data/data";
import { Card } from "react-bootstrap";

// Current weather conditions
function Conditions(props) {
  const weather = props.weather;
  const setConditions = props.setConditions;

  return (
    <div className="conditions-list-container">
      <Card className="condition-card" onClick={() => setConditions(["temperature", "temperatureMin", "temperatureMax"])}>
        <Card.Header as="h5">Temperature</Card.Header>
        {weatherIcons.temperature}
        <Card.Body>
          <Card.Text>
            {weather.hourly[0].temperature}
          </Card.Text>
          <Card.Text>
            {weather.daily[0].temperatureMin} | {weather.daily[0].temperatureMax}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="condition-card" onClick={() => setConditions(["cloudCover"])}>
        <Card.Header as="h5">Cloud Cover</Card.Header>
        {weatherIcons.cloudCover}
        <Card.Body>
          <Card.Text>
            {weather.hourly[0].cloudCover}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="condition-card" onClick={() => setConditions(["humidity"])}>
        <Card.Header as="h5">Humidity</Card.Header>
        {weatherIcons.humidity}
        <Card.Body>
          <Card.Text>
            {weather.hourly[0].humidity}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="condition-card" onClick={() => setConditions(["moonPhase"])}>
        <Card.Header as="h5">Moon Phase</Card.Header>
        {weatherIcons["moonPhase"][weather.daily[0].moonPhase].icon}
        <Card.Body>
          <Card.Text>
            {weatherIcons["moonPhase"][weather.daily[0].moonPhase].description}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="condition-card" onClick={() => setConditions(["precipitationType", "precipitationProbability"])}>
        <Card.Header as="h5">{weatherIcons["precipitationType"][weather.daily[0].precipitationType].description}</Card.Header>
        {weatherIcons["precipitationType"][weather.daily[0].precipitationType].icon}
        <Card.Body>
          <Card.Text>
            {weather.hourly[0].precipitationProbability}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="condition-card" onClick={() => setConditions(["sunriseTime", "sunsetTime"])}>
        <Card.Header as="h5">Rise | Set</Card.Header>
        <Card.Body>
          {weatherIcons.sunriseTime}
          <Card.Text>
            {weather.daily[0].sunriseTime}
          </Card.Text>
          {weatherIcons.sunsetTime}
          <Card.Text>
            {weather.daily[0].sunsetTime}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="condition-card" onClick={() => setConditions(["uvIndex", "uvHealthConcern"])}>
        <Card.Header as="h5">UV Index</Card.Header>
        {weatherIcons.uvIndex}
        <Card.Body>
          <Card.Text>
            {weather.hourly[0].uvIndex}
          </Card.Text>
          <Card.Text>
            {weather.hourly[0].uvHealthConcern}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="condition-card" onClick={() => setConditions(["visibility"])}>
        <Card.Header as="h5">Visibility</Card.Header>
        {weatherIcons.visibility}
        <Card.Body>
          <Card.Text>
            {weather.hourly[0].visibility}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="condition-card" onClick={() => setConditions(["windSpeed", "windDirection"])}>
        <Card.Header as="h5">Wind</Card.Header>
        {weatherIcons.windSpeed}
        <Card.Body>
          <Card.Text>
            {weather.hourly[0].windSpeed}
          </Card.Text>
          <Card.Text>
            {weather.hourly[0].windDirection}
          </Card.Text>
        </Card.Body>
      </Card>
      {/* <div onClick={() => setConditions(["temperature", "temperatureMin", "temperatureMax"])}>
        <h4>Temperature</h4>
        {weatherIcons.temperature}
        <h5>{weather.hourly[0].temperature}</h5>
        <h5>{weather.daily[0].temperatureMin}</h5>
        <h5>{weather.daily[0].temperatureMax}</h5>
      </div> */}
      {/* <div onClick={() => setConditions(["cloudCover"])}>
        <h4>Cloud Cover</h4>
        {weatherIcons.cloudCover}
        <h5>{weather.hourly[0].cloudCover}</h5>
      </div> */}
      {/* <div onClick={() => setConditions(["humidity"])}>
        <h4>Humidity</h4>
        {weatherIcons.humidity}
        <h5>{weather.hourly[0].humidity}</h5>
      </div> */}
      {/* <div onClick={() => setConditions(["moonPhase"])}>
        <h4>Moon Phase</h4>
        {weatherIcons["moonPhase"][weather.daily[0].moonPhase].icon}
        <h5>{weatherIcons["moonPhase"][weather.daily[0].moonPhase].description}</h5>
      </div> */}
      {/* <div onClick={() => setConditions(["precipitationType", "precipitationProbability"])}>
        <h4>{weatherIcons["precipitationType"][weather.daily[0].precipitationType].description}</h4>
        {weatherIcons["precipitationType"][weather.daily[0].precipitationType].icon}
        <h5>{weather.hourly[0].precipitationProbability}</h5>
      </div> */}
      {/* <div onClick={() => setConditions(["sunriseTime", "sunsetTime"])}>
        <h4>
        Sunrise | Sunset
        </h4>
        {weatherIcons.sunriseTime}
        <h5>{weather.daily[0].sunriseTime}</h5>
        {weatherIcons.sunsetTime}
        <h5>{weather.daily[0].sunsetTime}</h5>
      </div> */}
      {/* <div onClick={() => setConditions(["uvIndex", "uvHealthConcern"])}>
        <h4>UV Index</h4>
        {weatherIcons.uvIndex}
        <h5>{weather.hourly[0].uvIndex}</h5>
        <h5>{weather.hourly[0].uvHealthConcern}</h5>
      </div> */}
      {/* <div onClick={() => setConditions(["visibility"])}>
        <h4>Visibility</h4>
        {weatherIcons.visibility}
        <h5>{weather.hourly[0].visibility}</h5>
      </div> */}
      {/* <div onClick={() => setConditions(["windSpeed", "windDirection"])}>
        <h4>Wind</h4>
        {weatherIcons.windspeed}
        <h5>{weather.hourly[0].windSpeed}</h5>
        <h5>{weather.hourly[0].windDirection}</h5>
      </div> */}
    </div>
  )
}

export default Conditions;
