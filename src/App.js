import { useEffect, useState } from "react";
import { getTimezone } from './helperFunctions/helperFunctions';
import Weather from "./components/Weather";

function App() {
  // loading while getting user's location or setting default location
  const [loading, setLoading] = useState(true);
  const initialState = {
    cityName: "",
    coordinates: [], // [latitude, longitude]
    timezone: "", // must be IANA Time Zone Database format (eg: "America/New_York")
  }
  const [city, setCity] = useState(initialState);

  useEffect(() => {
    // get user's location and set to state if successful
    navigator.geolocation.getCurrentPosition((position) => {
      const userCoordinates = [
        position.coords.latitude,
        position.coords.longitude
      ];
      getTimezone(userCoordinates[0], userCoordinates[1])
        .then((res) => res.json())
        .then((result) => {
          setCity({
            ...city,
            cityName: "Current Location",
            coordinates: userCoordinates,
            timezone: result.timeZoneId,
          });
          setLoading(false);
        })
    },
      // if unsuccessful getting user's location use Honolulu as default
      function (error) {
        setCity({
          ...city,
          cityName: "Honolulu",
          coordinates: [21.315603, -157.858093],
          timezone: "US/Hawaii",
        })
        setLoading(false);
      })
  }, [])

  return (
    <div className="App">
      {
        loading ? (
          <div>Loading...</div>
        ) : (
          <Weather city={city} setCity={setCity} />
        )
      }
    </div>
  );
}

export default App;
