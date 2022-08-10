import TimeFrameItem from "./TimeFrameItem";
import { useState } from "react";

function TimeFrameList(props) {
  const [timeFrame, setTimeFrame] = useState("hourly");
  const weather = timeFrame === "hourly" ? props.weather.hourly.slice(0, 13) : props.weather.daily;
  return (
    <div>
      <div>
        <button onClick={setTimeFrame("hourly")}>Hourly</button>
        <button onClick={setTimeFrame("daily")}>Weekly</button>
      </div>
      <div>
        {weather.map((time) => {
          return <TimeFrameItem time={time} />
        })}
      </div>
    </div>
  )
}

export default TimeFrameList;