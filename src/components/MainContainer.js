function MainContainer() {
  return (
    <div className="main-container">
      <div className="city-search-container">
        <h2 className="city">Honolulu</h2>
        {/* start input as seach Icon -> onClick show input field */}
        <input
          type="text"
          placeholder="Search City or Zip"
        />
      </div>
      <div>
        <div>Weather Icon</div>
        <h4>Sunny</h4>
      </div>
      <div>
        <h3>75&deg;</h3>
        <h5>High/Low</h5>
      </div>
      <div>
        {/* list container for Additional weather detail options. Render each item component here */}
      </div>
    </div >
  )
}

export default MainContainer;
