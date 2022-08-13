import Main from './components/Main';
import TimeFrameList from './components/TimeFrameList';
import { useEffect, useState } from "react";
import { url, options } from "./data/data";
import Details from './components/Details';

function App() {
  // May need to adjust initialState structure
  const initialState = {
    daily: [],
    hourly: [],
  }

  const [weather, setWeather] = useState(initialState);
  const [loading, setLoading] = useState(true);

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
      {!loading &&
        <div>
          <Main weather={weather} />
          <Details weather={weather} />
          <TimeFrameList weather={weather} />
        </div>
      }
    </div>
  );
}

export default App;
