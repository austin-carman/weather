function ConditionItem(props) {
  const condition = props.condition;
  return (
    <div>
      <h4>{condition.title}</h4>
      <h4>{condition.icon}</h4>
      <h4>{condition.data}</h4>
    </div>
  )
}

export default ConditionItem;