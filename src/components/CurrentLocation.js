import { getTimezone } from "../helperFunctions/helperFunctions";
import { useState } from "react";

function CurrentLocation(props) {
  const { city, setCity } = props;
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    // Get user's current location and set to city
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
      // if unable to get user's current location prompt for searching or edit settings
      function (error) {
        setLoading(false);
        alert("Unable to determine current location. Please use the search field to find desired location or edit browser settings to enable sharing current location.")
      })
  }

  return (
    <div>
      {
        loading ? (
          <div>Loading...</div>
        ) : (
          <button onClick={handleClick}>Use Current Location</button>
        )
      }
    </div>
  )
}

export default CurrentLocation;
