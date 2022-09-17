import ForecastItem from "./ForecastItem";
import { useEffect, useState } from "react";
import { ButtonGroup, Button, CardGroup } from "react-bootstrap";

// Determines if hourly or daily conditions will be displayed
function ForecastList(props) {
  const { weather, conditions, timezone } = props;
  // if isHourlyForecast is true, forecast is hourly. If false, forecast is daily
  const [isHourlyForecast, setIsHourlyForecast] = useState(false);
  const [disabled, setDisabled] = useState(false);
  let forecastWeather = isHourlyForecast ? weather.hourly : weather.daily;

  useEffect(() => {
    // moon phase and sunrise/sunset conditions are not available in hourly forecast, only daily
    if (conditions[0] === "moonPhase" || conditions[0] === "sunriseTime") {
      setIsHourlyForecast(false)
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [conditions]);

  return (
    <CardGroup className="forecast-list">
      <ButtonGroup>
        <Button variant="primary" size="lg" disabled={disabled} onClick={() => setIsHourlyForecast(true)}>Hourly</Button>
        <Button variant="primary" size="lg" onClick={() => setIsHourlyForecast(false)}>Daily</Button>
      </ButtonGroup>
      {forecastWeather.map((forecast, index) => {
        return <ForecastItem key={index} forecast={forecast} isHourlyForecast={isHourlyForecast} conditions={conditions} timezone={timezone} />
      })}
    </CardGroup>
  )
}

export default ForecastList;