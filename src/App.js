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
      <Search setCity={setCity} />
      <CurrentLocation city={city} setCity={setCity} />
      {
        city.timezone ? (
          <Weather city={city} />
        ) : (
          <Home />
        )
      }
    </div>
  );
}

export default App;
