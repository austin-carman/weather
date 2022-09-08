import { useEffect, useState } from "react";

function Search(props) {
  const setCity = props.setCity;
  const [searchText, setSearchText] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  const mapboxApiKey = process.env.REACT_APP_MAPBOX_KEY;
  const minQueryLength = 3;
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

  useEffect(() => {
    if (searchText.length >= minQueryLength) {
      fetch(baseURL + dynamicURL, options)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setSearchSuggestions(data.features);
        })
        .catch((err) => {
          console.log("error: ", err);
        })
    }
  }, [searchText]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLocation(0)
  }

  const findCityName = (placeName) => {
    const city = placeName.split(",").reverse();
    return city[2];
  }

  const getTimezone = async (lat, long) => {
    const timezoneApiKey = process.env.REACT_APP_TIMEZONE_KEY;
    const location = `${lat},${long}`;
    const timeStamp = Math.floor(Date.now() / 1000);
    const url = `https://maps.googleapis.com/maps/api/timezone/json?location=${location}&timestamp=${timeStamp}&key=${timezoneApiKey}`;
    const timezoneId = await fetch(url)
    return timezoneId;
  }

  const handleLocation = async (index) => {
    const lat = searchSuggestions[index].geometry.coordinates[1];
    const long = searchSuggestions[index].geometry.coordinates[0]
    getTimezone(lat, long)
      .then((res) => res.json())
      .then((result) => {
        setCity({
          cityName: findCityName(searchSuggestions[index].place_name),
          coordinates: [lat, long],
          timezone: result.timeZoneId,
        })
      });
    setSearchText("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search City or Zip"
          onChange={handleChange}
          value={searchText}
        />
        {(searchText.length >= minQueryLength) && searchSuggestions.map((city, index) => {
          return <div key={index} onClick={() => handleLocation(index)}>{city.place_name}</div>
        })}
      </form>
    </>
  )
}

export default Search;