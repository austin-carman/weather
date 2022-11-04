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
    <Card className="forecast-cards">
      <Card.Header as="h5">{isHourlyForecast ? time : weekdays[date.getUTCDay()]}</Card.Header>
      <Card.Body>
        {conditions.map((condition, index) => {
          // Don't display temp low/temp high on hourly forecast (only daily)
          if ((condition === "temperatureMin" || condition === "temperatureMax") && isHourlyForecast) {
            return null;
          }
          if (condition === "precipitationType") {
            return <Card.Text as="h3" key={index}>{weatherIcons[condition][forecast[condition]].icon}</Card.Text>
          }
          if ((forecast[condition] === undefined || NaN)) {
            return <Card.Text key={index}>Data Unavailable</Card.Text>
          }
          return (
            <div key={index}>
              {
                // temperature's image will depend on time of day
                // Day = 6:00am through 7:00pm, Night = 8pm - 5am. Other 
                // conditions will use black and white icon
                condition === "temperature" ? (
                  <Card.Img
                    className="forecast-img"
                    variant="top"
                    src={
                      `icons/large/png/${(parseInt(militaryTime) > 5 && parseInt(militaryTime) < 20) ? (
                        forecast.weatherCodeDay
                      ) : (
                        forecast.weatherCodeNight
                      )
                      }.png`
                    }
                    alt="weather condition"
                  />
                ) : (
                  <Card.Text as="h3">{weatherIcons[condition]}</Card.Text>
                )
              }
              <Card.Text as="h5">{forecast[condition]}</Card.Text>
            </div>
          );
        })}
      </Card.Body>
    </Card>
  )
}

export default ForecastItem;