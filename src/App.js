import CurrentWeather from './components/CurrentWeather';
import { useEffect, useState } from "react";
import { url, options, weatherCodes, moonPhases, precipitation, uvHealthRisk, getWindDirection, weatherCodesNight } from "./data/data";
import Conditions from './components/Conditions';
import ForecastList from './components/ForecastList';

function App() {
  const initialWeatherState = {
    weatherCodeDay: null,
    hourly: [],
    daily: [],
  };
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState(initialWeatherState);
  const [conditions, setConditions] = useState(["temperature", "temperatureMin", "temperatureMax"]);
  const [city, setCity] = useState("Honolulu"); // set state in another component used for searching location - use mapbox api
  // state for units? metric vs imperial?

  useEffect(() => {
    fetch(url, options) // should I use async/await here instead of .then??
      .then(response => response.json())
      .then((response) => {
        // check if response.code is 429001 -> show error message that the request limit for this resource has been reached. Please wait and try again in an hour. Thank you for your patience
        // is there a better way to make these changes to the data or state??? function?
        console.log("Day Code: ", response.data.timelines[0].intervals[0].values.weatherCodeDay);
        console.log("Night Code: ", response.data.timelines[0].intervals[0].values.weatherCodeNight);
        setWeather({
          ...weather,
          // switch to weatherCodeFullDay instead of weatherCodeDay?
          weatherCodeDay: weatherCodes[response.data.timelines[0].intervals[0].values.weatherCodeDay],
          weatherCodeNight: weatherCodesNight[response.data.timelines[0].intervals[0].values.weatherCodeNight],
          hourly: response.data.timelines[1].intervals.slice(0, 25).map((hourlyForecast) => {
            let hourlyConditions = hourlyForecast.values;
            hourlyConditions = {
              cloudCover: Math.round(hourlyConditions.cloudCover) + "%",
              humidity: Math.round(hourlyConditions.humidity) + "%",
              precipitationProbability: hourlyConditions.precipitationProbability + "%",
              precipitationType: precipitation[hourlyConditions.precipitationType],
              sunriseTime: new Date(hourlyConditions.sunriseTime).toLocaleTimeString([], { hour: "numeric", minute: "numeric" }),
              sunsetTime: new Date(hourlyConditions.sunsetTime).toLocaleTimeString([], { hour: "numeric", minute: "numeric" }),
              temperature: Math.floor(hourlyConditions.temperature) + "\xB0",
              startTime: hourlyForecast.startTime,
              uvHealthConcern: uvHealthRisk[hourlyConditions.uvIndex],
              uvIndex: hourlyConditions.uvIndex,
              visibility: Math.round(hourlyConditions.visibility) + " mi",
              windDirection: getWindDirection(hourlyConditions.windDirection),
              windSpeed: Math.round(hourlyConditions.windSpeed) + " mph",
            }
            return hourlyConditions;
          }),
          daily: response.data.timelines[0].intervals.map((dailyForecast) => {
            let dailyConditions = dailyForecast.values;
            dailyConditions = {
              cloudCover: Math.round(dailyConditions.cloudCover) + "%",
              humidity: Math.round(dailyConditions.humidity) + "%",
              moonPhase: moonPhases[dailyConditions.moonPhase],
              precipitationProbability: dailyConditions.precipitationProbability + "%",
              precipitationType: precipitation[dailyConditions.precipitationType],
              sunriseTime: new Date(dailyConditions.sunriseTime).toLocaleTimeString([], { hour: "numeric", minute: "numeric" }),
              sunsetTime: new Date(dailyConditions.sunsetTime).toLocaleTimeString([], { hour: "numeric", minute: "numeric" }),
              temperature: Math.floor(dailyConditions.temperature) + "\xB0",
              temperatureMax: Math.floor(dailyConditions.temperatureMax) + "\xB0",
              temperatureMin: Math.floor(dailyConditions.temperatureMin) + "\xB0",
              startTime: dailyForecast.startTime,
              uvHealthConcern: uvHealthRisk[dailyConditions.uvIndex],
              uvIndex: dailyConditions.uvIndex,
              visibility: Math.round(dailyConditions.visibility) + " mi",
              windDirection: getWindDirection(dailyConditions.windDirection),
              windSpeed: Math.round(dailyConditions.windSpeed) + " mph",
            }
            return dailyConditions;
          }),
        })
        setLoading(false)
      })
      .catch(err => console.error(err));
  }, []); // API call on first render and when user submits a new location

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search City or Zip"
      />
      {
        loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <CurrentWeather weather={weather} city={city} />
            <Conditions weather={weather} setConditions={setConditions} />
            <ForecastList weather={weather} conditions={conditions} />
          </div>
        )
      }
    </div>
  );
}

export default App;
