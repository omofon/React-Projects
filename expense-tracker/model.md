const [expenses, setExpenses] = useState([]);

- `expenses` = your data
- `setExpenses` = function to change data
- When you call `setExpenses`, React re-runs your component and updates the page

## Let's Break Down What You Built

I'm going to explain the **thinking process** behind this app. Not the code—the **why**.

### The Problem

"I want to track my expenses and see the total."

### Breaking It Down

**Step 1: What data do I need?**

- A list of expenses
- Each expense has: description, amount, category, date

**Step 2: Where does the data live?**

- In state, in the parent component (App)

**Step 3: What can users do?**

- Add an expense
- Delete an expense
- Filter by category

**Step 4: How do I organize this?**

- `App` = holds the data and filtering logic
- `ExpenseForm` = lets users add expenses
- `ExpenseList` = displays expenses

### The Flow

User types in form → clicks "Add"
↓
ExpenseForm calls onAddExpense(newExpense)
↓
App's addExpense function runs
↓
setExpenses adds newExpense to array
↓
React sees state changed
↓
React re-renders App and its children
↓
ExpenseList receives new array
↓
User sees new expense on screen
