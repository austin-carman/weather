const baseURL = "https://api.tomorrow.io/v4/timelines";
let location = [21.315603, -157.858093]; // make state
const fields = [
  "temperature",
  "uvIndex",
  "windSpeed",
  "weatherCodeDay",
  "weatherCodeNight",
  "temperatureMax",
  "temperatureMin",
  "temperatureApparent",
  "windDirection",
  "windGust",
  "precipitationProbability",
  "precipitationType",
  "rainIntensity",
  "rainAccumulation",
  "snowIntensity",
  "snowAccumulation",
  "sunriseTime",
  "sunsetTime",
  "moonPhase",
  "cloudCover",
  "tides",
  "humidity",
  "visibility",
  "uvHealthConcern",
  "epaHealthConcern",
  "wildfireSmokeIndex",
  "floodIndex",
  "primarySwellWaveSignificantHeight",
  "seaSurfaceTemperature",
];
const units = "imperial";
let timezone = "US%2FHawaii"; // add to state
const apiKey = process.env.REACT_APP_API_KEY;
let date = new Date(); // do I need this
let currentDateISO = date.toISOString(); // do I need this  
export const options = {
  method: 'GET',
  headers: { Accept: 'application/json', 'Accept-Encoding': 'gzip' }
};
export const url = `${baseURL}?location=${location}&fields=${fields.join('&fields=')}&units=${units}&timesteps=1h&timesteps=1d&startTime=now&endTime=nowPlus7d&timezone=${timezone}&apikey=${apiKey}`;
