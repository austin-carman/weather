import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/App.css";
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
      <div className="header">
        <div className="name-container">
          <h4>Weather</h4>
          <img className="powered-by" src="Powered_by_Tomorrow-Black.png" alt="Powered by Tomorrow.io" />
        </div>
        <div className="search-container">
          <Search setCity={setCity} />
          <CurrentLocation city={city} setCity={setCity} />
        </div>
      </div>
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
