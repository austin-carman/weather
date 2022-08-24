function ConditionItem(props) {
  const hourlyConditions = props.hourlyConditions;
  console.log("hourly: ", hourlyConditions);

  return (
    <div style={{ border: "1px solid blue" }} onClick={() => console.log("user clicked here")}>
      {/* <h4>{props.conditionItem.title}</h4>
      <h4>{props.conditionItem.icon}</h4>
      <h4>{props.conditionItem.data}</h4> */}
    </div>
  )
}

export default ConditionItem;