import CurrentWeather from './components/CurrentWeather';
import { useEffect, useState } from "react";
import { weatherCodes, moonPhases, precipitation, uvHealthRisk, getWindDirection, weatherCodesNight } from "./data/data";
import Conditions from './components/Conditions';
import ForecastList from './components/ForecastList';
import Search from './components/Search';

function App() {
  const initialWeatherState = {
    weatherCodeDay: null,
    hourly: [],
    daily: [],
  };
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState(initialWeatherState);
  const [conditions, setConditions] = useState(["temperature", "temperatureMin", "temperatureMax"]);
  const [city, setCity] = useState({
    cityName: "Honolulu",
    coordinates: [21.315603, -157.858093], // lat, long
    timezone: "US/Hawaii" // Starts at weather in Hawaii (change to user's location)
  });

  const baseURL = "https://api.tomorrow.io/v4/timelines";
  let location = city.coordinates;
  const fields = [
    "temperature",
    "uvIndex",
    "windSpeed",
    "weatherCodeDay",
    "weatherCodeNight",
    "temperatureMax",
    "temperatureMin",
    "windDirection",
    "precipitationProbability",
    "precipitationType",
    "sunriseTime",
    "sunsetTime",
    "moonPhase",
    "cloudCover",
    "humidity",
    "visibility",
    "uvHealthConcern",
  ];
  const units = "imperial"; // future addition: allow user to pick units (imperial vs metric)
  const apiKey = process.env.REACT_APP_API_KEY;
  const options = {
    method: 'GET',
    headers: { Accept: 'application/json', 'Accept-Encoding': 'gzip' }
  };
  // is there a better way to construct the endpoint?
  const url = `${baseURL}?location=${location}&fields=${fields.join('&fields=')}&units=${units}&timesteps=1h&timesteps=1d&startTime=now&endTime=nowPlus7d&timezone=${city.timezone}&apikey=${apiKey}`;

  useEffect(() => {
    fetch(url, options)
      .then(response => response.json())
      .then((response) => {
        // check if response.code is 429001 -> show error message that the request limit for this resource has been reached. Please wait and try again in an hour. Thank you for your patience
        // is there a better way to make these changes to the data or state??? function?
        console.log("response: ", response);
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
  }, [city]);

  return (
    <div className="App">
      {
        loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <Search setCity={setCity} />
            <CurrentWeather weather={weather} city={city.cityName} />
            <Conditions weather={weather} setConditions={setConditions} />
            <ForecastList weather={weather} conditions={conditions} timezone={city.timezone} />
          </div>
        )
      }
    </div>
  );
}

export default App;
