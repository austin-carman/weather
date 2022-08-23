function ConditionItem(props) {
  return (
    <div style={{ border: "1px solid blue" }} onClick={() => props.setCondition(props.conditionItem.name)}>
      <h4>{props.conditionItem.title}</h4>
      <h4>{props.conditionItem.icon}</h4>
      <h4>{props.conditionItem.data}</h4>
    </div>
  )
}

export default ConditionItem;