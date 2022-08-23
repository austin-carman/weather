import CurrentWeather from './components/CurrentWeather';
import { useEffect, useState } from "react";
import { url, options } from "./data/data";
import ConditionsList from './components/ConditionsList';
import ForecastList from './components/ForecastList';

function App() {
  const initialWeatherState = {
    daily: [],
    hourly: [],
    current: [],
  }
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState(initialWeatherState);
  const [condition, setCondition] = useState("temperature");

  useEffect(() => {
    fetch(url, options)
      .then(response => response.json())
      .then((response) => {
        // check if response.code is 429001 -> show error message that the request limit for this resource has been reached. Please wait and try again in an hour. Thank you for your patience
        console.log(response.data);
        setWeather({ ...weather, daily: response.data.timelines[0].intervals, hourly: response.data.timelines[1].intervals.slice(0, 13), })
        setLoading(false)
      })
      .catch(err => console.error(err));
  }, []); // API call on first render and when user submits a new location

  return (
    <div className="App">
      {/* fetch mapbox api to autofill location */}
      <input
        type="text"
        placeholder="Search City or Zip"
      />
      {
        loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <CurrentWeather weather={weather} />
            <ConditionsList weather={weather} setCondition={setCondition} />
            <ForecastList weather={weather} condition={condition} />
          </div>
        )
      }
    </div>
  );
}

export default App;
