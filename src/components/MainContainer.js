function MainContainer() {
  fetch('https://api.tomorrow.io/v4/timelines?location=-73.98529171943665,40.75872069597532&fields=temperature&timesteps=1h&units=metric&apikey=process.env.REACT_APP_API_KEY', {
    method: "GET",
    compress: true,
  })
    .then((result) => JSON.parse(result))
    .then((weather) => console.log(weather))
    .catch((error) => console.error("error: " + error));

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
        <h4>Sunny</h4>
      </div>
      <div>
        <h3>75&deg;</h3>
        <h5>High/Low</h5>
      </div>
      <div>
        {/* list container for Additional weather detail options. Render each item component here */}
      </div>
    </div >
  )
}

export default MainContainer;
