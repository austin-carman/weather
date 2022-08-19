import ForcastItem from "./ForcastItem";
import { useState } from "react";

function ForcastList(props) {
  const [timeFrame, setTimeFrame] = useState("hourly");
  const hourlyWeather = props.weather.hourly;
  const dailyWeather = props.weather.daily;
  let weather = timeFrame === "hourly" ? hourlyWeather : dailyWeather;

  return (
    <div>
      <div>
        <button onClick={() => setTimeFrame("hourly")}>Hourly</button>
        <button onClick={() => setTimeFrame("daily")}>Daily</button>
      </div>
      <div>
        {weather.map((timeFrameWeather, index) => {
          return <ForcastItem key={index} timeFrameWeather={timeFrameWeather} timeFrame={timeFrame} condition={props.condition} />
        })}
      </div>
    </div>
  )
}

export default ForcastList;