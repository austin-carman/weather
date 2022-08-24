function ForecastItem(props) {
  const { forecast, isHourlyForecast, condition } = props;
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
      {/* condition icon */}
      <h5>{Math.floor(forecast.values[condition])}</h5>
    </div>
  )
}

export default ForecastItem;