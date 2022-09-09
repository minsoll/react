import './Card.css';

const Card = (props) =>  {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>
}
//children은 예약어이다. ExpenseItem.js <Card>사이에 컨텐츠가 들어온다.
export default Card;