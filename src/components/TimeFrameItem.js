function TimeFrameItem(props) {
  const weather = props.timeFrameWeather;
  const timeFrame = props.timeFrame;
  // round values...

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
  const time = date.toLocaleTimeString([], { hour: '2-digit' }).replace(/^0+/, '');

  return (
    <div>
      <h3>
        {timeFrame === "hourly" ? time : weekdays[date.getUTCDay()]}
      </h3>
      <h3>{weather.values.temperature}</h3> {/* Make last object property name dynamic based on user clicking on Details */}
    </div>
  )
}

export default TimeFrameItem;