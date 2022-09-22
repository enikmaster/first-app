import './ExpenseDate.css'

const ExpenseDate = (props) => {
    const mes=props.date.toLocaleString('pt-PT', {month: 'short'});
    const dia=props.date.toLocaleString('pt-PT', {day: '2-digit'});
    const ano=props.date.getFullYear();

    return (
      <div className="expense-date">
        <div className="expense-date__day">{dia}</div>
        <div className="expense-date__month">{mes}</div>
        <div className="expense-date__year">{ano}</div>
      </div>
    );
}

export default ExpenseDate;