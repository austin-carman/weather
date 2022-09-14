import { useEffect, useState } from "react";
import { getTimezone, getSearchSuggestions } from "../api/apiCalls";

// Search for location and get search suggestions
function Search(props) {
  const { setCity } = props;
  const [searchText, setSearchText] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const minQueryLength = 3; // min # of characters in input to get search suggestions

  useEffect(() => {
    if (searchText.length >= minQueryLength) {
      getSearchSuggestions(searchText)
        .then((res) => res.json())
        .then((data) => {
          setSearchSuggestions(data.features);
        })
        .catch((err) => { // TODO: handle error
          console.log("error: ", err);
        })
    }
  }, [searchText]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  }

  // Get city name from the user's search
  const findCityName = (placeName) => {
    const city = placeName.split(",").reverse();
    return city[2];
  }

  // pressing "enter" will submit the most closely
  // related search suggestion (first option listed)
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLocation(0)
  }

  const handleLocation = (index) => {
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
