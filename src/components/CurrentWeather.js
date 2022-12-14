import { weatherCodes } from "../data/data";

// Displays major current conditions (icon, description, temp/temp low/temp high)
function CurrentWeather(props) {
  const { currentHourWeather, currentDayWeather, city } = props;
  const date = new Date(currentHourWeather.startTime);
  // Get current hour on a 1-24 hour scale
  const time = date.toLocaleTimeString([], { hour: 'numeric', hour12: false });
  // If current time is from 6:00am through 7:00pm use weatherCodyDay otherwise use weatherCodeNight
  const code = (parseInt(time) > 5 && parseInt(time) < 20) ? currentDayWeather.weatherCodeDay : currentDayWeather.weatherCodeNight;

  return (
    <div>
      <h2>{city}</h2>
      <div>
        <img src={`icons/large/png/${code}.png`} alt="weather condition" />
        <h3>{weatherCodes[code]}</h3>
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
