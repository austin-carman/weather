import ForecastItem from "./ForecastItem";
import { useEffect, useState } from "react";

// Determines if hourly or daily conditions will be displayed
function ForecastList(props) {
  const { weather, conditions, timezone } = props;
  // if isHourlyForecast is true, forecast is hourly. If false, forecast is daily
  const [isHourlyForecast, setIsHourlyForecast] = useState(false);
  let forecastWeather = isHourlyForecast ? weather.hourly : weather.daily;

  useEffect(() => {
    // moon phase and sunrise/sunset conditions are not available in hourly forecast, only daily
    (conditions[0] === "moonPhase" || conditions[0] === "sunriseTime") && setIsHourlyForecast(false);
  }, [conditions]);

  return (
    <div>
      <div>
        {/* TODO: grey out the hourly button and make inactive for conditions that don't apply to hourly view, instead of removing hourly button completely */}
        <button onClick={(conditions[0] === "moonPhase" || conditions[0] === "sunriseTime") ? null : () => setIsHourlyForecast(true)}>Hourly</button>
        <button onClick={() => setIsHourlyForecast(false)}>Daily</button>
      </div>
      <div>
        {forecastWeather.map((forecast, index) => {
          return <ForecastItem key={index} forecast={forecast} isHourlyForecast={isHourlyForecast} conditions={conditions} timezone={timezone} />
        })}
      </div>
    </div>
  )
}

export default ForecastList;