import CurrentWeather from './components/CurrentWeather';
import { useEffect, useState } from "react";
import { url, options, weatherCodeDay } from "./data/data";
import ConditionsList from './components/ConditionsList';
import ForecastList from './components/ForecastList';

function App() {
  const initialWeatherState = {
    current: {},
    hourly: [],
    daily: [],
  }
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState(initialWeatherState);
  const [condition, setCondition] = useState("temperature");

  useEffect(() => {
    fetch(url, options)
      .then(response => response.json())
      .then((response) => {
        // check if response.code is 429001 -> show error message that the request limit for this resource has been reached. Please wait and try again in an hour. Thank you for your patience
        console.log(response.code);
        setWeather({
          ...weather,
          current: {
            ...weather.current,
            weatherCodeDay: response.data.timelines[0].intervals[0].values.weatherCodeDay,
            temperature: response.data.timelines[1].intervals[0].values.temperature,
            temperatureMax: response.data.timelines[0].intervals[0].values.temperatureMax,
            temperatureMin: response.data.timelines[0].intervals[0].values.temperatureMin,
            hourlyConditions: [response.data.timelines[1].intervals[0].values],
          },
          hourly: response.data.timelines[1].intervals.slice(0, 24),
          daily: response.data.timelines[0].intervals,
        })
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
