// Get the name of user's current location from coordinates
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

// Get the user's current timezone from coordinates
export const getTimezone = async (lat, long) => {
  const timezoneApiKey = process.env.REACT_APP_TIMEZONE_KEY;
  const location = `${lat},${long}`;
  const timeStamp = Math.floor(Date.now() / 1000);
  const url = `https://maps.googleapis.com/maps/api/timezone/json?location=${location}&timestamp=${timeStamp}&key=${timezoneApiKey}`;
  const timezoneId = await fetch(url)
  return timezoneId;
}

// Get Search Suggestions for locations based on user input
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

// Get weather for desired location
export const getWeather = async (location, timezone) => {
  const baseURL = "https://api.tomorrow.io/v4/timelines";
  const fields = [
    "temperature",
    "uvIndex",
    "windSpeed",
    "weatherCodeDay",
    "weatherCodeNight",
    "temperatureMax",
    "temperatureMin",
    "windDirection",
    "precipitationProbability",
    "precipitationType",
    "sunriseTime",
    "sunsetTime",
    "cloudCover",
    "humidity",
    "visibility",
    "uvHealthConcern",
  ];
  const units = "imperial"; // TODO: allow user to pick units (imperial vs metric)
  const apiKey = process.env.REACT_APP_API_KEY;
  // ?Question?: is there a better way to construct the endpoint?
  const url = `${baseURL}?location=${location}&fields=${fields.join('&fields=')}&units=${units}&timesteps=1h&timesteps=1d&startTime=now&endTime=nowPlus7d&timezone=${timezone}&apikey=${apiKey}`;
  const options = {
    method: 'GET',
    headers: { Accept: 'application/json', 'Accept-Encoding': 'gzip' }
  };
  const weather = await fetch(url, options);
  return weather;
}
