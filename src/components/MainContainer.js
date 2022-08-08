import { useEffect } from "react";

function MainContainer() {
  const baseURL = "https://api.tomorrow.io/v4/timelines";
  let location = [21.315603, -157.858093]; // make state
  const fields = [
    "temperature",
    "uvIndex",
    "windSpeed",
    "weatherCodeDay",
    // "weatherCodeNight",
    // "temperatureMax",
    // "temperatureMin",
    // "temperatureApparent",
    // "windDirection",
    // "windGust",
    // "precipitationProbability",
    // "precipitationType",
    // "rainIntensity",
    // "rainAccumulation",
    // "snowIntensity",
    // "snowAccumulation",
    // "sunriseTime",
    // "sunsetTime",
    // "moonPhase",
    // "cloudCover",
    // "uvHealthConcern",
    // "epaHealthConcern",
    // "wildfireSmokeIndex",
    // "floodIndex",
    // "primarySwellWaveSignificantHeight",
    // "primarySwellMeanPeriod",
    // "seaSurfaceTemperature",
    // "tides",
    // "humidity",
    // "visibility",
  ];
  const units = "imperial";
  let timezone = "US%2FHawaii"; // add to state
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `${baseURL}?location=${location}&fields=${fields.join('&fields=')}&units=${units}&timesteps=1h&timesteps=1d&startTime=now&endTime=nowPlus7d&timezone=${timezone}&apikey=${apiKey}`;
  let date = new Date(); // do I need this
  let currentDateISO = date.toISOString(); // do I need this

  const options = {
    method: 'GET',
    headers: { Accept: 'application/json', 'Accept-Encoding': 'gzip' }
  };
  useEffect(() => {
    // fetch(url, options)
    //   .then(response => response.json())
    //   .then(response => console.log(response))
    //   .catch(err => console.error(err));
  }, []); // API call on first render and when user submits a new location

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
