function TimeFrameItem(props) {
  const weather = props.timeFrameWeather;
  const timeFrame = props.timeFrame;
  // round values (ex: temperature rounds down to whole number)
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
      <h4>
        {timeFrame === "hourly" ? time : weekdays[date.getUTCDay()]}
      </h4>
      {/* weather icon here */}
      <h5>{weather.values.temperature}&deg;</h5> {/* Make last object property name dynamic based on user clicking on Details */}
    </div>
  )
}

export default TimeFrameItem;