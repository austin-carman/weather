import { getTimezone, getLocationName } from "../helperFunctions/helperFunctions";
import { useState } from "react";

function CurrentLocation(props) {
  const { city, setCity } = props;
  const [loading, setLoading] = useState(false);

  // Get user's current location (user will be asked for permission to share location)
  const handleClick = () => {
    setLoading(true);
    // If user gives permission to share location
    navigator.geolocation.getCurrentPosition((position) => {
      const userCoordinates = [
        position.coords.latitude,
        position.coords.longitude
      ];
      const getLocation = async () => {
        try {
          const locationName = await getLocationName(userCoordinates[0], userCoordinates[1]);
          const locationTimezone = await getTimezone(userCoordinates[0], userCoordinates[1]);
          const name = await locationName.json();
          const timezone = await locationTimezone.json();
          return [name.features[3].text, timezone.timeZoneId];
        } catch (err) { // TODO: handle errors
          console.log("error: ", err);
        }
      }
      getLocation()
        .then((result) => { // result is [location name, location timezone]
          setCity({
            ...city,
            cityName: result[0],
            coordinates: userCoordinates,
            timezone: result[1],
          });
          setLoading(false);
        });
    },
      // If unable to get user's current location display alert
      function (error) {
        setLoading(false);
        alert("Unable to get current location. Please use the search field to find desired location or edit browser settings to enable sharing location.")
      })
  }

  return (
    <>
      {
        loading ? (
          <div>Loading...</div> // TODO: loading animation?
        ) : (
          <button onClick={handleClick}>Use Current Location</button>
        )
      }
    </>
  )
}

export default CurrentLocation;
