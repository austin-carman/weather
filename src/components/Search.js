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
        .then((data) => setSearchSuggestions(data.features))
        .catch((err) => {
          console.log("error: ", err);
        })
    }

  }, [searchText]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  }

  const handleSubmit = () => {
    // submitting without clicking the auto suggested submits the top suggestion
    setCity(searchText);
    setSearchText("");
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search City or Zip"
        onChange={handleChange}
        value={searchText}
      />
      <button onClick={handleSubmit}>Submit</button>
      {searchSuggestions.map((city) => {
        return <div>{city.place_name}</div>
      })}
    </>
  )
}

export default Search;