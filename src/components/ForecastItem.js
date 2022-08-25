function ForecastItem(props) {
  const { forecast, isHourlyForecast, conditions } = props;
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const date = new Date(forecast.startTime);
  const time = date.toLocaleTimeString([], { hour: 'numeric' });

  return (
    <div>
      <h4>
        {isHourlyForecast ? time : weekdays[date.getUTCDay()]}
      </h4>
      {conditions.map((condition, index) => {
        if ((condition === "temperatureMin" || condition === "temperatureMax") && isHourlyForecast) {
          return <div key={index}></div>;
        }
        if ((forecast[condition] === undefined || NaN)) {
          return <h5 key={index}>Data Unavailable</h5>
        }
        return <h5 key={index}>{forecast[condition]}</h5>;
      })}
    </div>
  )
}

export default ForecastItem;