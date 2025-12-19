import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense])
  }

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense=>expense.id !== id))
  }
  
  const total = expenses.reduce((sum, expense) => sum + expense.amount, )
  
  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />

      <div className="summary">
        <h2>Total: ${total.toFixed(2)}</h2>
        <p>{expenses.length} expenses</p>
      </div>

      <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense}

    </div>
  );
}
export default App;
