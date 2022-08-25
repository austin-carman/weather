import { useState } from "react";

function Search() {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search City or Zip"
        onChange={handleChange}
        value={userInput}
      />
    </>
  )
}

export default Search;