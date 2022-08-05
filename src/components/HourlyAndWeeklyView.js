function HourlyAndWeeklyView() {
  return (
    <div>
      <div>
        <button>Hourly</button>
        <button>Weekly</button>
      </div>
      <div>
        <div> {/* Create new component to construct these divs */}
          <h4>5am</h4>
          <div>Icon</div>
          <h4>71&deg;</h4>
        </div>
        <div>
          <h4>6am</h4>
          <div>Icon</div>
          <h4>71&deg;</h4>
        </div>
        <div>
          <h4>7am</h4>
          <div>Icon</div>
          <h4>71&deg;</h4>
        </div>
        <div>
          <h4>8am</h4>
          <div>Icon</div>
          <h4>71&deg;</h4>
        </div>
        <div>
          <h4>9am</h4>
          <div>Icon</div>
          <h4>71&deg;</h4>
        </div>
      </div>
    </div>
  )
}

export default HourlyAndWeeklyView;