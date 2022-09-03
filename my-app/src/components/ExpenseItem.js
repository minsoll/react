// 비용아이템
import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date(2022, 9, 3);
  const expenseTitle = 'car Insurance';
  const expenseAmount = 294.67;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      {/* Date는 객체이기 때문에  <div>{expenseDate}</div>처럼 문자로 출력할 수 없다. */}
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
 );
}

export default ExpenseItem;