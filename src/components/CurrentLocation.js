import { getTimezone } from "../helperFunctions/helperFunctions";
import { useState } from "react";

function CurrentLocation(props) {
  const { city, setCity } = props;
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    // Get user's current location
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
            cityName: "Current Location", // TODO: mapbox api reverse geolocation to get actual city name from coordinates
            coordinates: userCoordinates,
            timezone: result.timeZoneId,
          });
          setLoading(false);
        })
    },
      // if unable to get user's current location
      function (error) {
        setLoading(false);
        alert("Unable to determine current location. Please use the search field to find desired location or edit browser settings to enable sharing current location.")
      })
  }

  return (
    <div>
      {loading ? (
        <div>load...</div>
      ) : (
        <button onClick={handleClick}>Use Current Location</button>
      )
      }
      {/* TODO: add more to Home page */}
    </div>
  )
}

export default CurrentLocation;
