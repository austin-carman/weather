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
        // Don't display temp low/temp high on hourly forecast (only daily)
        if ((condition === "temperatureMin" || condition === "temperatureMax") && isHourlyForecast) {
          return null;
        }
        if ((forecast[condition] === undefined || NaN)) {
          return <h5 key={index}>Data Unavailable</h5>
        }
        return (
          <div key={index}>
            {(condition === "temperature" && isHourlyForecast === false) && <img src={`icons/large/png/${forecast.weatherCodeDay}.png`} alt="weather condition" />}
            <h5>{forecast[condition]}</h5>
          </div>
        );
      })}
    </div>
  )
}

export default ForecastItem;