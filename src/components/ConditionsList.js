import ConditionItem from "./ConditionItem";
import { moonPhases } from "../data/data";
import { uvIndexHealthConcern } from "../data/data";
import getWindDirection from "../data/data";

function ConditionsList(props) {
  const weather = props.weather.hourly[0].values;
  // should I move this to data file?
  // where should I be using hourly vs daily?????
  // where should I round values??? (APP.js?)
  // Should this be set to state in App.js and passed here instead?
  const conditions = [ // expand to include all conditions. Is there a way to create this in a function instead of hardcoding
    {
      title: "Temperature",
      icon: "Icon",
      name: "temperature",
      data: `${Math.floor(weather.temperature)}\xB0`,
    },
    // need to use daily instead of hourly here
    {
      title: "Temperature Low",
      icon: "Icon",
      name: "temperatureMin",
      data: `${Math.floor(weather.temperatureMin)}\xB0`,
    },
    // need to use daily instead of hourly here
    {
      title: "Temperature High",
      icon: "Icon",
      name: "temperatureMax",
      data: `${Math.floor(weather.temperatureMax)}\xB0`,
    },
    {
      title: "Precipitation",
      icon: "Icon",
      name: "precipitationProbability",
      data: `${weather.precipitationProbability} %`
    },
    // precipitationType
    {
      title: "Wind",
      icon: "Icon",
      name: "windSpeed",
      data: `${Math.round(weather.windSpeed)} mph`,
    },
    {
      title: "Wind Direction",
      icon: "Icon",
      name: "windDirection",
      data: getWindDirection(Math.round(weather.windDirection)),
    },
    {
      title: "Clouds",
      icon: "Icon",
      name: "cloudCover",
      data: `${weather.cloudCover} %`
    },
    {
      title: "Sunrise",
      icon: "Icon",
      name: "sunriseTime",
      data: new Date(weather.sunriseTime).toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' })
    },
    {
      title: "Sunset",
      icon: "Icon",
      name: "sunsetTime",
      data: new Date(weather.sunsetTime).toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' })
    },
    // moon phase shows image and description?
    {
      title: "Moon Phase",
      icon: "Icon",
      name: "moonPhase",
      data: moonPhases[weather.moonPhase]
    },
    {
      title: "UV",
      icon: "Icon",
      name: "uvIndex",
      data: weather.uvIndex,
    },
    // edge case: what if healthConcern value is greater than 11?
    {
      title: "UV Health Concern",
      icon: "Icon",
      name: "uvHealthConcern",
      data: uvIndexHealthConcern[weather.uvHealthConcern],
    },
    {
      title: "Humidity",
      icon: "Icon",
      name: "humidity",
      data: `${weather.humidity} %`
    },
    {
      title: "Visibility",
      icon: "Icon",
      name: "visibility",
      data: `${Math.round(weather.visibility)} mi`,
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