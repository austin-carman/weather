import { useState } from "react";

function Search(props) {
  const setCity = props.setCity;
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value)
  }

  const handleSubmit = () => {
    setCity(userInput);
    setUserInput("");
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search City or Zip"
        onChange={handleChange}
        value={userInput}
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Search;