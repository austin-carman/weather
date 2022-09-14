export const getLocationName = async (lat, long) => {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json;charset=UTF-8",
    }
  };
  const mapboxApiKey = process.env.REACT_APP_MAPBOX_KEY;
  const locationName = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${long},${lat}.json?access_token=${mapboxApiKey}`, options)
  return locationName
}

export const getTimezone = async (lat, long) => {
  const timezoneApiKey = process.env.REACT_APP_TIMEZONE_KEY;
  const location = `${lat},${long}`;
  const timeStamp = Math.floor(Date.now() / 1000);
  const url = `https://maps.googleapis.com/maps/api/timezone/json?location=${location}&timestamp=${timeStamp}&key=${timezoneApiKey}`;
  const timezoneId = await fetch(url)
  return timezoneId;
}

export const getSearchSuggestions = async (searchText) => {
  const mapboxApiKey = process.env.REACT_APP_MAPBOX_KEY;
  const baseURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
  const dynamicURL = `${searchText}.json?country=us&types=place%2Cpostcode%2Caddress&language=en&access_token=${mapboxApiKey}`;
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json;charset=UTF-8",
    }
  };
  const url = baseURL + dynamicURL;
  const suggestions = await fetch(url, options)
  return suggestions;
}