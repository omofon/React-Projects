function ExpenseList({ expenses, onDeleteExpense }) {
  if (expenses.length === 0) {
    return <p className="empty-state">No expenses yet. Add one above!</p>;
  }

  return (
    <div className="expense-list">
      {expenses.map((expense) => (
        <div key={expense.id} className="expense-item">
          <div className="expense-info">
            <span className="expense-description">{expense.description}</span>
            <span className="expense-category">{expense.category}</span>
            <span className="expense-date">{expense.date}</span>
          </div>
          <div className="expense-actions">
            <span className="expense-amount">${expense.amount.toFixed(2)}</span>
            <button
              onClick={() => onDeleteExpense(expense.id)}
              className="delete-btn"
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;
