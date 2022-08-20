import ConditionItem from "./ConditionItem";

function ConditionsList(props) {
  const weather = props.weather.hourly[0].values;
  // should I move this to data file?
  const conditions = [ // expand to include all conditions. Is there a way to create this in a function instead of hardcoding
    {
      title: "Temperature",
      icon: "Icon",
      name: "temperature",
      data: `${weather.temperature}&deg;`,
    },
    // tempMin
    // tempMax  
    {
      title: "Precipitation",
      icon: "Icon",
      name: "precipitationProbability",
      data: weather.precipitationProbability
    },
    // precipitationType
    {
      title: "Wind",
      icon: "Icon",
      name: "windSpeed",
      data: weather.windSpeed,
    },
    // windDirection
    {
      title: "Clouds",
      icon: "Icon",
      name: "cloudCover",
      data: weather.cloudCover
    },
    {
      title: "Sunrise",
      icon: "Icon",
      name: "sunriseTime",
      data: weather.sunriseTime
    },
    {
      title: "Sunset",
      icon: "Icon",
      name: "sunsetTime",
      data: weather.sunsetTime
    },
    {
      title: "Moon Phase",
      icon: "Icon",
      name: "moonPhase",
      data: weather.moonPhase
    },
    {
      title: "UV",
      icon: "Icon",
      name: "uvIndex",
      data: weather.uvIndex,
    },
    // uvHealthConcern
    {
      title: "Humidity",
      icon: "Icon",
      name: "humidity",
      data: weather.humidity
    },
    {
      title: "Visibility",
      icon: "Icon",
      name: "visibility",
      data: weather.visibility,
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