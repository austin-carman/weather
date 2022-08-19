import ConditionItem from "./ConditionItem";

function ConditionsList(props) {
  const weather = props.weather.hourly[0].values;
  const conditions = [ // expand to include all conditions. Is there a way to make this a function
    {
      title: "Clouds",
      icon: "Icon",
      name: "cloudCover",
      data: weather.cloudCover
    },
    {
      title: "Humidity",
      icon: "Icon",
      name: "humidity",
      data: weather.humidity
    },
    {
      title: "Moon Phase",
      icon: "Icon",
      name: "moonPhase",
      data: weather.moonPhase
    },
    {
      title: "Temperature",
      icon: "Icon",
      name: "temperature",
      data: weather.temperature
    },
  ];

  return (
    <div>
      {conditions.map((conditionItem, index) => {
        return <ConditionItem key={index} conditionItem={conditionItem} setCondition={props.setCondition} />
      })}
    </div>
  )
}

export default ConditionsList;