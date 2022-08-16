function TimeFrameItem(props) {
  const weather = props.timeFrameWeather;
  // round values...
  return (
    <div>
      <h3>{weather.values.temperature}</h3> {/* Make last object property name dynamic based on user clicking on Details */}
    </div>
  )
}

export default TimeFrameItem;