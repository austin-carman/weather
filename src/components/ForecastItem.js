import { weatherIcons } from "../data/data";

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
  // used to differentiate day weather code and night weather code
  const militaryTime = date.toLocaleTimeString([], { hour: 'numeric', hour12: false });
  return (
    <div>
      <h4>
        {isHourlyForecast ? time : weekdays[date.getUTCDay()]}
      </h4>
      {conditions.map((condition, index) => {
        if (condition === "temperature") {
          console.log(forecast.weatherCodeDay);
        }
        // Don't display temp low/temp high on hourly forecast (only daily)
        if ((condition === "temperatureMin" || condition === "temperatureMax") && isHourlyForecast) {
          return null;
        }
        if ((forecast[condition] === undefined || NaN)) {
          return <h5 key={index}>Data Unavailable</h5>
        }
        if (condition === "precipitationType") {
          return <h5 key={index}>{weatherIcons[condition][forecast[condition]].icon}</h5>
        }
        if (condition === "moonPhase") {
          return (
            <div key={index}>
              <h5>{weatherIcons[condition][forecast[condition]].icon}</h5>
              <h5>{weatherIcons[condition][forecast[condition]].description}</h5>
            </div>
          )
        }
        return (
          <div key={index}>
            {condition === "temperature" ? <img src={`icons/large/png/${(parseInt(militaryTime) > 5 && parseInt(militaryTime) < 20) ? forecast.weatherCodeDay : forecast.weatherCodeNight}.png`} alt="weather condition" /> : weatherIcons[condition]}
            <h5>{forecast[condition]}</h5>
          </div>
        );
      })}
    </div>
  )
}

export default ForecastItem;