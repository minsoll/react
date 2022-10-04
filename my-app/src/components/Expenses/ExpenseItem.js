// 비용아이템
import React, {useState } from 'react';

import ExpenseDate from './ExpenseDate'; //components폴더 안에 있어./components 작성안함
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

 const [title, setTitle] = useState(props.title);

 
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
    
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>change title</button>
    </Card>
 );
}

export default ExpenseItem;