import { getTimezone } from "../helperFunctions/helperFunctions";
import { useState } from "react";

function CurrentLocation(props) {
  const { city, setCity } = props;
  const [loading, setLoading] = useState(false);

  // Get user's current location (user will be asked for permission to share location)
  const handleClick = () => {
    setLoading(true);
    // User gives permission to share location
    navigator.geolocation.getCurrentPosition((position) => {
      const userCoordinates = [
        position.coords.latitude,
        position.coords.longitude
      ];
      const options = {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json;charset=UTF-8",
        }
      };
      const mapboxApiKey = process.env.REACT_APP_MAPBOX_KEY;
      const getLocation = async () => {
        try {
          // get location name from user's coordinates (coordinates must be longitude,latitude in endpoint)
          const locationName = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${userCoordinates[1]},${userCoordinates[0]}.json?access_token=${mapboxApiKey}`, options);
          // get timezone from user's coordinates: getTimezone(lat, long)
          const locationTimezone = await getTimezone(userCoordinates[0], userCoordinates[1]);
          const name = await locationName.json();
          const timezone = await locationTimezone.json();
          return [name.features[3].text, timezone.timeZoneId];
        } catch (err) { // TODO: handle errors
          console.log("error: ", err);
        }
      }
      getLocation()
        .then((result) => {
          // result is [location name, location timezone]
          setCity({
            ...city,
            cityName: result[0],
            coordinates: userCoordinates,
            timezone: result[1],
          });
          setLoading(false);
        });
    },
      // If unable to get user's current location prompt for searching or edit settings
      function (error) {
        setLoading(false);
        alert("Unable to get current location. Please use the search field to find desired location or edit browser settings to enable sharing location.")
      })
  }

  return (
    <>
      {
        loading ? (
          <div>Loading...</div>
        ) : (
          <button onClick={handleClick}>Use Current Location</button>
        )
      }
    </>
  )
}

export default CurrentLocation;
