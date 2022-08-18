import CurrentWeather from './components/CurrentWeather';
import { useEffect, useState } from "react";
import { url, options } from "./data/data";
import ConditionsList from './components/ConditionsList';
import ForcastList from './components/ForcastList';

function App() {
  const initialState = {
    daily: [],
    hourly: [],
  }
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState(initialState);
  // const [condition, setCondition] = useState("temperature");

  useEffect(() => {
    fetch(url, options)
      .then(response => response.json())
      .then((response) => {
        setWeather({ ...initialState, daily: response.data.timelines[0].intervals, hourly: response.data.timelines[1].intervals.slice(0, 13) })
        setLoading(false)
      })
      .catch(err => console.error(err));
  }, []); // API call on first render and when user submits a new location

  return (
    <div className="App">
      {
        loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <CurrentWeather weather={weather} />
            <ConditionsList weather={weather} />
            <ForcastList weather={weather} />
          </div>
        )
      }
    </div>
  );
}

export default App;
