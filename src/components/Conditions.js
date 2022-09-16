import { weatherIcons } from "../data/data";
import { Card, CardGroup } from "react-bootstrap";

// Current weather conditions
function Conditions(props) {
  const weather = props.weather;
  const setConditions = props.setConditions;

  return (
    <CardGroup className="conditions-list-container">
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
    </CardGroup>
  )
}

export default Conditions;
