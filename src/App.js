// import logo from './logo.svg';
import './App.css';
import MainContainer from './components/MainContainer';
import HourlyAndWeeklyView from './components/HourlyAndWeeklyView';
import { useEffect, useState } from "react";
import { url, options } from "./data/data";

function App() {
  const initialState = {
    daily: [],
    hourly: [],
  }
  const [weather, setWeather] = useState(initialState);
  useEffect(() => {
    // fetch(url, options)
    //   .then(response => response.json())
    //   .then(response => setWeather({ ...initialState, daily: response.data.timelines[0].intervals, hourly: response.data.timelines[1].intervals }))
    //   .catch(err => console.error(err));
  }, []); // API call on first render and when user submits a new location


  return (
    <div className="App">
      <MainContainer weather={weather} />
      <HourlyAndWeeklyView />
    </div>
  );
}

export default App;
