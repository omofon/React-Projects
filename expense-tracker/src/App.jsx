import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense])
  }
  
  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <p>Expenses: {expenses.length}</p>
    </div>
  );
}
export default App;
