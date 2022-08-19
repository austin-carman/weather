function ForcastItem(props) {
  const weather = props.timeFrameWeather;
  const timeFrame = props.timeFrame;
  const condition = props.condition;
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
      <h2>{condition}</h2>
      <h4>
        {timeFrame === "hourly" ? time : weekdays[date.getUTCDay()]}
      </h4>
      {/* weather icon here */}
      <h5>{Math.floor(weather.values[condition])}&deg;</h5> {/* Make last object property name dynamic based on user clicking on Details */}
    </div>
  )
}

export default ForcastItem;