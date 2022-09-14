import { useState, useEffect } from "react";
import Conditions from './Conditions';
import ForecastList from './ForecastList';
import CurrentWeather from './CurrentWeather';
import { moonPhases, precipitation, uvHealthRisk, getWindDirection } from "../data/data";
import { getWeather } from "../api/apiCalls.js";

// Get Weather
function Weather(props) {
  const { city } = props;
  const initialWeatherState = {
    weatherCodeDay: null,
    weatherCodeNight: null,
    hourly: [],
    daily: [],
  };
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState(initialWeatherState);
  // conditions displayed in ForecastItem.js as Hourly/Daily forecast - temp conditions will be default
  const [conditions, setConditions] = useState(["temperature", "temperatureMin", "temperatureMax"]);

  useEffect(() => {
    getWeather(city.coordinates, city.timezone)
      .then(response => response.json())
      .then((response) => {
        setWeather({
          ...weather,
          weatherCodeDay: response.data.timelines[0].intervals[0].values.weatherCodeDay,
          weatherCodeNight: response.data.timelines[0].intervals[0].values.weatherCodeNight,
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
              weatherCodeDay: dailyConditions.weatherCodeDay,
              weatherCodeNight: dailyConditions.weatherCodeNight,
              windDirection: getWindDirection(dailyConditions.windDirection),
              windSpeed: Math.round(dailyConditions.windSpeed) + " mph",
            }
            return dailyConditions;
          }),
        })
        setLoading(false)
      })
      .catch(err => console.error(err));  // TODO: handle errors
  }, [city]);

  return (
    <>
      {
        loading ? (
          <div>Loading...</div> // TODO: animation for loading?
        ) : (
          <div>
            <CurrentWeather city={city.cityName} currentHourWeather={weather.hourly[0]} currentDayWeather={weather.daily[0]} />
            <Conditions weather={weather} setConditions={setConditions} />
            <ForecastList weather={weather} conditions={conditions} timezone={city.timezone} />
          </div>
        )
      }
    </>
  );
}

export default Weather;
