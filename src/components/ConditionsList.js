import ConditionItem from "./ConditionItem";

function ConditionsList(props) {
  const weather = props.weather.hourly[0].values
  const conditions = [
    {
      title: "Clouds",
      icon: "Icon",
      data: weather.cloudCover
    },
    {
      title: "Humidity",
      icon: "Icon",
      data: weather.humidity
    },
    {
      title: "Moon Phase",
      icon: "Icon",
      data: weather.moonPhase
    },
    {
      title: "Temperature",
      icon: "Icon",
      data: weather.temperature
    },
  ]

  return (
    <div>
      {conditions.map((condition) => {
        return <ConditionItem condition={condition} />
      })}
    </div>
  )
}

export default ConditionsList;