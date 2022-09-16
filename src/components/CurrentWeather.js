import { weatherCodes } from "../data/data";
import { Card } from "react-bootstrap";

// Displays major current conditions (icon, description, temp/temp low/temp high)
function CurrentWeather(props) {
  const { currentHourWeather, currentDayWeather, city } = props;
  const date = new Date(currentHourWeather.startTime);
  // Get current hour on a 1-24 hour scale
  const time = date.toLocaleTimeString([], { hour: 'numeric', hour12: false });
  // If current time is from 6:00am through 7:00pm use weatherCodyDay otherwise use weatherCodeNight
  const code = (parseInt(time) > 5 && parseInt(time) < 20) ? currentDayWeather.weatherCodeDay : currentDayWeather.weatherCodeNight;

  return (
    <Card border="light">
      <Card.Header as="h3" className="city">{city}</Card.Header>
      <Card.Img className="current-weather-img" variant="top" src={`icons/large/png/${code}.png`} alt="weather condition" />
      <Card.Body className="current-weather-body">
        <Card.Title as="h4">{weatherCodes[code]}</Card.Title>
        <Card.Text as="h5">
          {currentHourWeather.temperature}
        </Card.Text>
        <Card.Text as="h6">
          {currentDayWeather.temperatureMin} | {currentDayWeather.temperatureMax}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CurrentWeather;
