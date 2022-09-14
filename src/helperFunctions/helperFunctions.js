export const findCityName = (placeName) => {
  const city = placeName.split(",").reverse();
  return city[2];
}

// export const getWeather = async (location, timezone) => {
//   const baseURL = "https://api.tomorrow.io/v4/timelines";
//   const fields = [
//     "temperature",
//     "uvIndex",
//     "windSpeed",
//     "weatherCodeDay",
//     "weatherCodeNight",
//     "temperatureMax",
//     "temperatureMin",
//     "windDirection",
//     "precipitationProbability",
//     "precipitationType",
//     "sunriseTime",
//     "sunsetTime",
//     "moonPhase",
//     "cloudCover",
//     "humidity",
//     "visibility",
//     "uvHealthConcern",
//   ];
//   const units = "imperial"; // TODO: allow user to pick units (imperial vs metric)
//   const apiKey = process.env.REACT_APP_API_KEY;
//   // is there a better way to construct the endpoint?
//   const url = `${baseURL}?location=${location}&fields=${fields.join('&fields=')}&units=${units}&timesteps=1h&timesteps=1d&startTime=now&endTime=nowPlus7d&timezone=${timezone}&apikey=${apiKey}`;
//   const options = {
//     method: 'GET',
//     headers: { Accept: 'application/json', 'Accept-Encoding': 'gzip' }
//   };
//   // return url;
//   const weather = await fetch(url, options);
//   return weather;
// }
