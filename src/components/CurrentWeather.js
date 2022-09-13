import { weatherDayCodes, weatherNightCodes } from "../data/data";

// Displays current temp/temp low/temp high
function CurrentWeather(props) {
  const { currentHourWeather, currentDayWeather, city } = props;

  // To get current time (hour) as a number on a 1-24 hour scale
  const date = new Date(currentHourWeather.startTime);
  const time = date.toLocaleTimeString([], { hour: 'numeric', hour12: false });

  return (
    <div>
      <h2>{city}</h2>
      <div>
        {/* If current time is between 5:00am and 10pm use
         weatherCodyDay for conditions description.
        If current time is between 10pm and 5:00am use 
        weatherCodeNight for conditions description
        */}
        {
          (parseInt(time) > 5 && parseInt(time) < 22) ? (
            <div>
              <img src={`icons/large/png/${currentDayWeather.weatherCodeDay}.png`} alt="weather condition" />
              <h4>{weatherDayCodes[currentDayWeather.weatherCodeDay]}</h4>
            </div>
          ) : (
            <div>
              <img src={`icons/large/png/${currentDayWeather.weatherCodeNight}.png`} alt="weather condition" />
              <h4>{weatherNightCodes[currentDayWeather.weatherCodeNight]}</h4>
            </div>
          )
        }
      </div>
      <div>
        <h3>{currentHourWeather.temperature}</h3>
        <h5>Low: {currentDayWeather.temperatureMin}</h5>
        <h5>High: {currentDayWeather.temperatureMax}</h5>
      </div>
    </div>
  )
}

export default CurrentWeather;
