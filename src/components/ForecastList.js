import ForecastItem from "./ForecastItem";
import { useState } from "react";

function ForecastList(props) {
  const hourlyWeather = props.weather.hourly;
  const dailyWeather = props.weather.daily;
  const [isHourlyForecast, setIsHourlyForecast] = useState(true);
  let weather = isHourlyForecast ? hourlyWeather : dailyWeather;

  return (
    <div>
      <div>
        <button onClick={() => setIsHourlyForecast(true)}>Hourly</button>
        <button onClick={() => setIsHourlyForecast(false)}>Daily</button>
      </div>
      <div>
        {weather.map((forecast, index) => {
          return <ForecastItem key={index} forecast={forecast} isHourlyForecast={isHourlyForecast} condition={props.condition} />
        })}
      </div>
    </div>
  )
}

export default ForecastList;