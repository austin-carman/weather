import TimeFrameItem from "./TimeFrameItem";
import { useState } from "react";

function TimeFrameList(props) {
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
          return <TimeFrameItem key={index} timeFrameWeather={timeFrameWeather} />
        })}
      </div>
    </div>
  )
}

export default TimeFrameList;