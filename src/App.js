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
  const [weather, setWeather] = useState();
  useEffect(() => {
    fetch(url, options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }, []); // API call on first render and when user submits a new location

  return (
    <div className="App">
      <MainContainer />
      <HourlyAndWeeklyView />
    </div>
  );
}

export default App;
