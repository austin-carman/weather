function ForecastItem(props) {
  const { timeFrameWeather, timeFrame, condition } = props;
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const date = new Date(timeFrameWeather.startTime);
  const time = date.toLocaleTimeString([], { hour: '2-digit' }).replace(/^0+/, '');

  return (
    <div>
      <h4>
        {timeFrame === "hourly" ? time : weekdays[date.getUTCDay()]}
      </h4>
      {/* condition icon */}
      <h5>{Math.floor(timeFrameWeather.values[condition])}</h5>
    </div>
  )
}

export default ForecastItem;