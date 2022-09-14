import { moonPhases, weatherIcons } from "../data/data";

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

  return (
    <div>
      <h4>
        {isHourlyForecast ? time : weekdays[date.getUTCDay()]}
      </h4>
      {conditions.map((condition, index) => {
        // const MoonIcon = condition === "moonPhase" && moonPhases[forecast[condition]].icon;
        // Don't display temp low/temp high on hourly forecast (only daily)
        if ((condition === "temperatureMin" || condition === "temperatureMax") && isHourlyForecast) {
          return null;
        }
        if ((forecast[condition] === undefined || NaN)) {
          return <h5 key={index}>Data Unavailable</h5>
        }
        if (condition === "precipitationType") {
          return (
            <div>
              <h5>{weatherIcons[condition][forecast[condition]].icon}</h5>
              <h5>{weatherIcons[condition][forecast[condition]].description}</h5>
            </div>
          )
        }
        if (condition === "precipitationProbability") {
          <div>
            <h5>{forecast[condition]}</h5>
          </div>
        }
        return (
          <div key={index}>
            {/* decide if temperature will be tomorrow.io icons or weatherIcons */}
            {/* {(condition === "temperature" && isHourlyForecast === false) && <img src={`icons/large/png/${forecast.weatherCodeDay}.png`} alt="weather condition" />} */}
            {
              condition === "moonPhase" ? (
                <div>
                  <h5>{weatherIcons[condition][forecast[condition]].icon}</h5>
                  <h5>{weatherIcons[condition][forecast[condition]].phase}</h5>
                </div>
              ) : (
                <div>
                  {weatherIcons[condition]}
                  <h5>{forecast[condition]}</h5>
                </div>
              )
            }
          </div>
        );
      })}
    </div>
  )
}

export default ForecastItem;