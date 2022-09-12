import ForecastItem from "./ForecastItem";
import { useEffect, useState } from "react";

// Determines if hourly or daily conditions will be displayed
function ForecastList(props) {
  // determines if daily or hourly forecast conditions are displayed
  // if isHourlyForecast is true, forecast is hourly. If false, forecast is daily
  const [isHourlyForecast, setIsHourlyForecast] = useState(false);
  let weather = isHourlyForecast ? props.weather.hourly : props.weather.daily;

  useEffect(() => {
    // moon phase and sunrise/sunset conditions are not available in hourly forecast, only daily
    (props.conditions[0] === "moonPhase" || props.conditions[0] === "sunriseTime") && setIsHourlyForecast(false);
  }, [props.conditions]);

  return (
    <div>
      <div>
        {/* TODO: grey out the button and make inactive for below scenario instead of removing it completely */}
        {/* don't display the Hourly button as an option for conditions that don't have hourly forecast */}
        <button onClick={(props.conditions[0] === "moonPhase" || props.conditions[0] === "sunriseTime") ? null : () => setIsHourlyForecast(true)}>Hourly</button>
        <button onClick={() => setIsHourlyForecast(false)}>Daily</button>
      </div>
      <div>
        {weather.map((forecast, index) => {
          return <ForecastItem key={index} forecast={forecast} isHourlyForecast={isHourlyForecast} conditions={props.conditions} timezone={props.timezone} />
        })}
      </div>
    </div>
  )
}

export default ForecastList;