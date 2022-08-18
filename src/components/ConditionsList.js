// import { useState } from "react";

function ConditionsList(props) {
  // const weather = props.weather;
  // const weatherConditions = weather.daily[0].values;
  // const [currentCondition, setCurrentCondition] = useState("temperature");
  // const conditions = [
  //   "cloudCover",
  //   "humidity",
  //   "moonPhase",
  //   "temperature"
  // ]
  // const conditions = [
  //   {
  //     conditionTitle: "Clouds",
  //     conditionIcon: "Icon",
  //     conditionData: weatherConditions.cloudCover
  //   },
  //   {
  //     conditionTitle: "Humidity",
  //     conditionIcon: "Icon",
  //     conditionData: weatherConditions.humidity
  //   },
  //   {
  //     conditionTitle: "Moon Phase",
  //     conditionIcon: "Icon",
  //     conditionData: weatherConditions.moonPhase
  //   },
  //   {
  //     conditionTitle: "Temperature",
  //     conditionIcon: "Icon",
  //     conditionData: weatherConditions[currentCondition]
  //   },
  // ]

  return (
    <div>
      Conditions List
      {/* {conditions.map((condition) => {
        return (
          <div>
            <h4>{condition.conditionTitle}</h4>
            <h4>{condition.conditionIcon}</h4>
            <h4>{condition.conditionData}</h4>
          </div>
        )
      })} */}
    </div>
  )
}

export default ConditionsList;