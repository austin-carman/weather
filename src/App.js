import { useState } from "react";
import Weather from "./components/Weather";
import Search from "./components/Search";
import CurrentLocation from "./components/CurrentLocation";
import Home from "./components/Home";

function App() {
  const initialState = {
    cityName: "",
    coordinates: [], // must be [latitude, longitude]
    timezone: "", // must be IANA Time Zone Database format (eg: "America/New_York")
  }
  const [city, setCity] = useState(initialState);

  return (
    <div className="App">
      <h2>Weather</h2>
      <Search setCity={setCity} />
      <CurrentLocation city={city} setCity={setCity} />
      {
        city.timezone ? (
          <Weather city={city} />
        ) : (
          <Home />
        )
      }
      <img src="Powered_by_Tomorrow-Black.png" alt="Powered by Tomorrow.io" />
    </div>
  );
}

export default App;
