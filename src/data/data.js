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
  // "temperatureApparent",
  "windDirection",
  // "windGust",
  "precipitationProbability",
  "precipitationType",
  // "rainIntensity",
  // "rainAccumulation",
  // "snowIntensity",
  // "snowAccumulation",
  "sunriseTime",
  "sunsetTime",
  "moonPhase",
  "cloudCover",
  // "tides",
  "humidity",
  "visibility",
  "uvHealthConcern",
  // "epaHealthConcern",
  // "wildfireSmokeIndex",
  // "floodIndex",
  // "primarySwellWaveSignificantHeight",
  // "seaSurfaceTemperature",
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
export const weatherCodes = {
  0: "Unknown",
  10000: "Clear, Sunny",
  11000: "Mostly Clear",
  11010: "Partly Cloudy",
  11020: "Mostly Cloudy",
  10010: "Cloudy",
  11030: "Partly Cloudy and Mostly Clear",
  21000: "Light Fog",
  21010: "Mostly Clear and Light Fog",
  21020: "Partly Cloudy and Light Fog",
  21030: "Mostly Cloudy and Light Fog",
  21060: "Mostly Clear and Fog",
  21070: "Partly Cloudy and Fog",
  21080: "Mostly Cloudy and Fog",
  20000: "Fog",
  42040: "Partly Cloudy and Drizzle",
  42030: "Mostly Clear and Drizzle",
  42050: "Mostly Cloudy and Drizzle",
  40000: "Drizzle",
  42000: "Light Rain",
  42130: "Mostly Clear and Light Rain",
  42140: "Partly Cloudy and Light Rain",
  42150: "Mostly Cloudy and Light Rain",
  42090: "Mostly Clear and Rain",
  42080: "Partly Cloudy and Rain",
  42100: "Mostly Cloudy and Rain",
  40010: "Rain",
  42110: "Mostly Clear and Heavy Rain",
  42020: "Partly Cloudy and Heavy Rain",
  42120: "Mostly Cloudy and Heavy Rain",
  42010: "Heavy Rain",
  51150: "Mostly Clear and Flurries",
  51160: "Partly Cloudy and Flurries",
  51170: "Mostly Cloudy and Flurries",
  50010: "Flurries",
  51000: "Light Snow",
  51020: "Mostly Clear and Light Snow",
  51030: "Partly Cloudy and Light Snow",
  51040: "Mostly Cloudy and Light Snow",
  51220: "Drizzle and Light Snow",
  51050: "Mostly Clear and Snow",
  51060: "Partly Cloudy and Snow",
  51070: "Mostly Cloudy and Snow",
  50000: "Snow",
  51010: "Heavy Snow",
  51190: "Mostly Clear and Heavy Snow",
  51200: "Partly Cloudy and Heavy Snow",
  51210: "Mostly Cloudy and Heavy Snow",
  51100: "Drizzle and Snow",
  51080: "Rain and Snow",
  51140: "Snow and Freezing Rain",
  51120: "Snow and Ice Pellets",
  60000: "Freezing Drizzle",
  60030: "Mostly Clear and Freezing drizzle",
  60020: "Partly Cloudy and Freezing drizzle",
  60040: "Mostly Cloudy and Freezing drizzle",
  62040: "Drizzle and Freezing Drizzle",
  62060: "Light Rain and Freezing Drizzle",
  62050: "Mostly Clear and Light Freezing Rain",
  62030: "Partly Cloudy and Light Freezing Rain",
  62090: "Mostly Cloudy and Light Freezing Rain",
  62000: "Light Freezing Rain",
  62130: "Mostly Clear and Freezing Rain",
  62140: "Partly Cloudy and Freezing Rain",
  62150: "Mostly Cloudy and Freezing Rain",
  60010: "Freezing Rain",
  62120: "Drizzle and Freezing Rain",
  62200: "Light Rain and Freezing Rain",
  62220: "Rain and Freezing Rain",
  62070: "Mostly Clear and Heavy Freezing Rain",
  62020: "Partly Cloudy and Heavy Freezing Rain",
  62080: "Mostly Cloudy and Heavy Freezing Rain",
  62010: "Heavy Freezing Rain",
  71100: "Mostly Clear and Light Ice Pellets",
  71110: "Partly Cloudy and Light Ice Pellets",
  71120: "Mostly Cloudy and Light Ice Pellets",
  71020: "Light Ice Pellets",
  71080: "Mostly Clear and Ice Pellets",
  71070: "Partly Cloudy and Ice Pellets",
  71090: "Mostly Cloudy and Ice Pellets",
  70000: "Ice Pellets",
  71050: "Drizzle and Ice Pellets",
  71060: "Freezing Rain and Ice Pellets",
  71150: "Light Rain and Ice Pellets",
  71170: "Rain and Ice Pellets",
  71030: "Freezing Rain and Heavy Ice Pellets",
  71130: "Mostly Clear and Heavy Ice Pellets",
  71140: "Partly Cloudy and Heavy Ice Pellets",
  71160: "Mostly Cloudy and Heavy Ice Pellets",
  71010: "Heavy Ice Pellets",
  80010: "Mostly Clear and Thunderstorm",
  80030: "Partly Cloudy and Thunderstorm",
  80020: "Mostly Cloudy and Thunderstorm",
  80000: "Thunderstorm"
};
export const weatherCodeNight = {
  0: "Unknown",
  10001: "Clear",
  11001: "Mostly Clear",
  11011: "Partly Cloudy",
  11021: "Mostly Cloudy",
  10011: "Cloudy",
  11031: "Partly Cloudy and Mostly Clear",
  21001: "Light Fog",
  21011: "Mostly Clear and Light Fog",
  21021: "Partly Cloudy and Light Fog",
  21031: "Mostly Cloudy and Light Fog",
  21061: "Mostly Clear and Fog",
  21071: "Partly Cloudy and Fog",
  21081: "Mostly Cloudy and Fog",
  20001: "Fog",
  42041: "Partly Cloudy and Drizzle",
  42031: "Mostly Clear and Drizzle",
  42051: "Mostly Cloudy and Drizzle",
  40001: "Drizzle",
  42001: "Light Rain",
  42131: "Mostly Clear and Light Rain",
  42141: "Partly Cloudy and Light Rain",
  42151: "Mostly Cloudy and Light Rain",
  42091: "Mostly Clear and Rain",
  42081: "Partly Cloudy and Rain",
  42101: "Mostly Cloudy and Rain",
  40011: "Rain",
  42111: "Mostly Clear and Heavy Rain",
  42021: "Partly Cloudy and Heavy Rain",
  42121: "Mostly Cloudy and Heavy Rain",
  42011: "Heavy Rain",
  51151: "Mostly Clear and Flurries",
  51161: "Partly Cloudy and Flurries",
  51171: "Mostly Cloudy and Flurries",
  50011: "Flurries",
  51001: "Light Snow",
  51021: "Mostly Clear and Light Snow",
  51031: "Partly Cloudy and Light Snow",
  51041: "Mostly Cloudy and Light Snow",
  51221: "Drizzle and Light Snow",
  51051: "Mostly Clear and Snow",
  51061: "Partly Cloudy and Snow",
  51071: "Mostly Cloudy and Snow",
  50001: "Snow",
  51011: "Heavy Snow",
  51191: "Mostly Clear and Heavy Snow",
  51201: "Partly Cloudy and Heavy Snow",
  51211: "Mostly Cloudy and Heavy Snow",
  51101: "Drizzle and Snow",
  51081: "Rain and Snow",
  51141: "Snow and Freezing Rain",
  51121: "Snow and Ice Pellets",
  60001: "Freezing Drizzle",
  60031: "Mostly Clear and Freezing drizzle",
  60021: "Partly Cloudy and Freezing drizzle",
  60041: "Mostly Cloudy and Freezing drizzle",
  62041: "Drizzle and Freezing Drizzle",
  62061: "Light Rain and Freezing Drizzle",
  62051: "Mostly Clear and Light Freezing Rain",
  62031: "Partly cloudy and Light Freezing Rain",
  62091: "Mostly Cloudy and Light Freezing Rain",
  62001: "Light Freezing Rain",
  62131: "Mostly Clear and Freezing Rain",
  62141: "Partly Cloudy and Freezing Rain",
  62151: "Mostly Cloudy and Freezing Rain",
  60011: "Freezing Rain",
  62121: "Drizzle and Freezing Rain",
  62201: "Light Rain and Freezing Rain",
  62221: "Rain and Freezing Rain",
  62071: "Mostly Clear and Heavy Freezing Rain",
  62021: "Partly Cloudy and Heavy Freezing Rain",
  62081: "Mostly Cloudy and Heavy Freezing Rain",
  62011: "Heavy Freezing Rain",
  71101: "Mostly Clear and Light Ice Pellets",
  71111: "Partly Cloudy and Light Ice Pellets",
  71121: "Mostly Cloudy and Light Ice Pellets",
  71021: "Light Ice Pellets",
  71081: "Mostly Clear and Ice Pellets",
  71071: "Partly Cloudy and Ice Pellets",
  71091: "Mostly Cloudy and Ice Pellets",
  70001: "Ice Pellets",
  71051: "Drizzle and Ice Pellets",
  71061: "Freezing Rain and Ice Pellets",
  71151: "Light Rain and Ice Pellets",
  71171: "Rain and Ice Pellets",
  71031: "Freezing Rain and Heavy Ice Pellets",
  71131: "Mostly Clear and Heavy Ice Pellets",
  71141: "Partly Cloudy and Heavy Ice Pellets",
  71161: "Mostly Cloudy and Heavy Ice Pellets",
  71011: "Heavy Ice Pellets",
  80011: "Mostly Clear and Thunderstorm",
  80031: "Partly Cloudy and Thunderstorm",
  80021: "Mostly Cloudy and Thunderstorm",
  80001: "Thunderstorm"
};

export const moonPhases = {
  0: "New",
  1: "Waxing Crescent",
  2: "First Quarter",
  3: "Waxing Gibbous",
  4: "Full",
  5: "Waning Gibbous",
  6: "Third Quarter",
  7: "Waning Crescent",
};

export const uvHealthRisk = {
  0: "Low",
  1: "Low",
  2: "Low",
  3: "Moderate",
  4: "Moderate",
  5: "Moderate",
  6: "High",
  7: "High",
  8: "Very High",
  9: "Very High",
  10: "Very High",
  11: "Extreme",
};

export function getWindDirection(deg) {
  if (deg >= 330 || (deg >= 0 && deg <= 30)) {
    return "N";
  } else if (deg > 30 && deg < 60) {
    return "NE"
  } else if (deg >= 60 && deg <= 120) {
    return "E";
  } else if (deg > 120 && deg < 150) {
    return "SE"
  } else if (deg >= 150 && deg <= 210) {
    return "S";
  } else if (deg > 210 && deg < 240) {
    return "SW"
  } else if (deg >= 240 && deg <= 300) {
    return "W";
  } else if (deg > 300 && deg < 330) {
    return "NW"
  }
};

export const precipitation = {
  1: "Rain",
  2: "Snow",
  3: "Freezing Rain",
  4: "Ice Pellets / Sleet",
};
