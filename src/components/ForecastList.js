import ForecastItem from "./ForecastItem";
import { useEffect, useState } from "react";

function ForecastList(props) {
  const [isHourlyForecast, setIsHourlyForecast] = useState(false);
  let weather = isHourlyForecast ? props.weather.hourly : props.weather.daily;

  useEffect(() => {
    (props.conditions[0] === "moonPhase" || props.conditions[0] === "sunriseTime") && setIsHourlyForecast(false);
  }, [props.conditions]);

  return (
    <div>
      <div>
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