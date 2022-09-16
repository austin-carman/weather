import { weatherIcons } from "../data/data";
import { Card } from "react-bootstrap";

// Displays Hourly or Daily conditions
function ForecastItem(props) {
  const { forecast, isHourlyForecast, conditions, timezone } = props;
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  // date and local time of location
  const date = new Date(forecast.startTime);
  const time = date.toLocaleTimeString("en-US", { hour: 'numeric', timeZone: timezone });
  // used to differentiate use of weather code day and weather code night 
  const militaryTime = date.toLocaleTimeString([], { hour: 'numeric', hour12: false });
  return (
    <Card>
      <Card.Header as="h5">{isHourlyForecast ? time : weekdays[date.getUTCDay()]}</Card.Header>
      <Card.Body>
        {conditions.map((condition, index) => {
          // Don't display temp low/temp high on hourly forecast (only daily)
          if ((condition === "temperatureMin" || condition === "temperatureMax") && isHourlyForecast) {
            return null;
          }
          if (condition === "precipitationType") {
            return <Card.Text key={index}>{weatherIcons[condition][forecast[condition]].icon}</Card.Text>
          }
          if (condition === "moonPhase") {
            return (
              <div key={index} >
                <Card.Text>
                  {weatherIcons[condition][forecast[condition]].icon}
                </Card.Text>
                <Card.Text>
                  {weatherIcons[condition][forecast[condition]].description}
                </Card.Text>
              </div>
            )
          }
          if ((forecast[condition] === undefined || NaN)) {
            return <Card.Text key={index}>Data Unavailable</Card.Text>
          }
          return (
            <div key={index}>
              {/* 
                if condition is temperature use the image corresponding to the weather code appropriate for that time of day: 
                Day = 6:00am through 7:00pm, Night = 8pm - 5am. 
                Otherwise use condition's regular(black and white) icon
              */}
              {
                condition === "temperature" ? (
                  <img
                    src={`icons/large/png/${(parseInt(militaryTime) > 5 && parseInt(militaryTime) < 20) ? forecast.weatherCodeDay : forecast.weatherCodeNight}.png`}
                    alt="weather condition"
                  />
                ) : (
                  weatherIcons[condition]
                )
              }
              <Card.Text>{forecast[condition]}</Card.Text>
            </div>
          );
        })}
      </Card.Body>
    </Card>
  )
}

export default ForecastItem;