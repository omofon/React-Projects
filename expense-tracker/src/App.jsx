import { useState } from "react";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <p>Expenses: {expenses.length}</p>
    </div>
  );
}
export default App;
