import sun from "../icons/large/png/10000_clear_large.png";
import rain from "../icons/large/png/40010_rain_large.png";
import parlyCloudy from "../icons/large/png/11010_partly_cloudy_large.png";
import snow from "../icons/large/png/50000_snow_large.png";

function Home() {
  return (
    <>
      <h1>Weather</h1>
      <div>
        <img src={sun} alt="Sunny" />
        <img src={rain} alt="Rainy" />
        <img src={parlyCloudy} alt="Partly Cloudy" />
        <img src={snow} alt="Snowy" />
      </div>
    </>
  )
}

export default Home;
