function TimeFrameItem(props) {
  const weather = props.timeFrameWeather;
  // round values...

  // is using daily timeframe
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const date = new Date(weather.startTime);

  return (
    <div>
      <h3>
        {weekdays[date.getUTCDay()]} {/* if using daily timeframe */}
      </h3>
      <h3>{weather.values.temperature}</h3> {/* Make last object property name dynamic based on user clicking on Details */}
    </div>
  )
}

export default TimeFrameItem;