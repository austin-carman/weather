import { useState, useEffect } from "react";
import { getWeatherUrl } from "../helperFunctions/helperFunctions";
import Search from "./Search";
import Conditions from './Conditions';
import ForecastList from './ForecastList';
import CurrentWeather from './CurrentWeather';
import { weatherCodes, moonPhases, precipitation, uvHealthRisk, getWindDirection, weatherCodesNight } from "../data/data";

function Weather(props) {
  const { userLocation } = props;
  const initialWeatherState = {
    weatherCodeDay: null,
    hourly: [],
    daily: [],
  };
  const cityDefault = {
    cityName: "Honolulu",
    coordinates: [21.315603, -157.858093], // lat, long
    timezone: "US/Hawaii",
  }

  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState(initialWeatherState);
  const [conditions, setConditions] = useState(["temperature", "temperatureMin", "temperatureMax"]);
  const [city, setCity] = useState(userLocation.timezone ? userLocation : cityDefault);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: { Accept: 'application/json', 'Accept-Encoding': 'gzip' }
    };
    const url = getWeatherUrl(city.coordinates, city.timezone);
    fetch(url, options)
      .then(response => response.json())
      .then((response) => {
        // check if response.code is 429001 -> show error message that the request limit for this resource has been reached. 
        // Please wait and try again in an hour. Thank you for your patience
        // is there a better way to make these changes to the data or state??? function?
        setWeather({
          ...weather,
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

export default Weather;
