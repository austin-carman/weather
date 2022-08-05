function MainContainer() {
  return (
    <div className="main-container">
      <div className="city-search-container">
        <h2 className="city">Honolulu</h2>
        <input
          type="text"
          placeholder="city or zip"
        />
      </div>
      <div>
        <div>Weather Icon</div>
        <div>
          <h3>75&deg;</h3>
          <h5>Sunny</h5>
        </div>
      </div>
      <div>
        <div>Icon</div>
        <div>
          <h4>Title</h4>
          <p>Details</p>
        </div>
      </div>
    </div>
  )
}

export default MainContainer;