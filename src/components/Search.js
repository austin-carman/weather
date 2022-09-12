import { useEffect, useState } from "react";
import { getTimezone, findCityName } from "../helperFunctions/helperFunctions";

// Search for location and get search suggestions
function Search(props) {
  const { setCity } = props;
  const [searchText, setSearchText] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const minQueryLength = 3; // min # of characters in input to get search suggestions

  useEffect(() => {
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
    if (searchText.length >= minQueryLength) {
      // get search suggestions based on user input
      fetch(baseURL + dynamicURL, options)
        .then((res) => res.json())
        .then((data) => {
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

  // pressing "enter" will submit the most closely
  // related search suggestion (first option listed)
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLocation(0)
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
