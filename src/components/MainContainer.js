function MainContainer() {
  // fetch('https://api.tomorrow.io/v4/timelines?location=-73.98529171943665,40.75872069597532&fields=temperature&timesteps=1h&units=metric&apikey=', {
  //   method: "GET",
  //   compress: true,
  // })
  //   .then((result) => result.json())
  //   .then((json) => console.log(json))
  //   .catch((error) => console.error("error: " + error));

  return (
    <div className="main-container">
      <div className="city-search-container">
        <h2 className="city">Honolulu</h2> {/* City - from API response */}
        {/* Set Input to Local state */}
        <input
          type="text"
          placeholder="Search City or Zip"
        />
      </div>
      <div>
        <div>Weather Icon</div>
        <div>
          <h3>75&deg;</h3>
          <h5>Sunny</h5>
        </div>
      </div>
      <div>
        <div>Icon</div>
        <div>
          <h4>Title</h4>
          <p>Details</p>
        </div>
      </div>
    </div>
  )
}

export default MainContainer;
