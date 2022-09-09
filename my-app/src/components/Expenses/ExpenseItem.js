// 비용아이템
import ExpenseDate from './ExpenseDate'; //components폴더 안에 있어./components 작성안함
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log('clicked!');
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>change title</button>
    </Card>
 );
}

export default ExpenseItem;