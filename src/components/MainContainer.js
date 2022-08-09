function MainContainer(props) {
  const weather = props.weather;
  return (
    <div className="main-container">
      <div className="city-search-container">
        <h2 className="city">Honolulu</h2>
        {/* start input as seach Icon -> onClick show input field */}
        <input
          type="text"
          placeholder="Search City or Zip"
        />
      </div>
      <div>
        <div>Weather Icon</div>
        <h4>{weather.daily[0].values.weatherCodeDay}</h4>
      </div>
      <div>
        <h3>{weather.hourly[0].values.temperature}&deg;</h3>
        <h5>{weather.daily[0].values.temperatureMax}</h5>
        <h5>{weather.daily[0].values.temperatureMin}</h5>
      </div>
      <div>
        {/* list container for Additional weather detail options. Render each item component here */}
      </div>
    </div >
  )
}

export default MainContainer;
