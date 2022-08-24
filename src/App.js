import CurrentWeather from './components/CurrentWeather';
import { useEffect, useState } from "react";
import { url, options, weatherCodes } from "./data/data";
import Conditions from './components/Conditions';
import ForecastList from './components/ForecastList';

function App() {
  const initialWeatherState = {
    current: {
      icon: null,
      weatherCodeDay: null,
      temperature: null,
      temperatureMin: null,
      temperatureMax: null,
      conditions: {},
    },
    forecast: {
      hourly: [],
      daily: [],
    }
  };
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState(initialWeatherState);
  const [condition, setCondition] = useState("temperature");
  const [city, setCity] = useState("Honolulu");

  useEffect(() => {
    fetch(url, options)
      .then(response => response.json())
      .then((response) => {
        // check if response.code is 429001 -> show error message that the request limit for this resource has been reached. Please wait and try again in an hour. Thank you for your patience
        setWeather({
          ...weather,
          current: {
            ...weather.current,
            weatherCodeDay: weatherCodes[response.data.timelines[0].intervals[0].values.weatherCodeDay],
            temperature: `${Math.floor(response.data.timelines[0].intervals[0].values.temperature)}\xB0`,
            temperatureMin: `${Math.floor(response.data.timelines[0].intervals[0].values.temperatureMin)}\xB0`,
            temperatureMax: `${Math.floor(response.data.timelines[0].intervals[0].values.temperatureMax)}\xB0`,
            conditions: response.data.timelines[1].intervals[0].values,
          },
          forecast: {
            ...weather.forecast,
            hourly: response.data.timelines[1].intervals.slice(0, 25),
            daily: response.data.timelines[0].intervals,
          }
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
            <CurrentWeather weather={weather.current} city={city} />
            <Conditions weather={weather.current} setCondition={setCondition} />
            <ForecastList weather={weather.forecast} condition={condition} />
          </div>
        )
      }
    </div>
  );
}

export default App;
