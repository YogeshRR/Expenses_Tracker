import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "pair of shoes",
    amount: 395,
    date: new Date("2024-02-05"),
  },
  {
    id: "e2",
    description: "Bring Table",
    amount: 1400,
    date: new Date("2024-02-10"),
  },
  {
    id: "e3",
    description: "Bring Fruits",
    amount: 150,
    date: new Date("2024-02-05"),
  },
  {
    id: "e4",
    description: "Purchase a Shirts",
    amount: 399,
    date: new Date("2024-01-10"),
  },
  {
    id: "e5",
    description: "Purchase a Book",
    amount: 100,
    date: new Date("2024-02-01"),
  },
  {
    id: "e6",
    description: "pair of shoes",
    amount: 395,
    date: new Date("2024-02-19"),
  },
  {
    id: "e7",
    description: "Bring Table",
    amount: 1400,
    date: new Date("2024-02-17"),
  },
  {
    id: "e8",
    description: "Bring Fruits",
    amount: 150,
    date: new Date("2024-02-23"),
  },
  {
    id: "e9",
    description: "Purchase a Shirts",
    amount: 399,
    date: new Date("2024-02-24"),
  },
  {
    id: "e10",
    description: "Purchase a Book",
    amount: 100,
    date: new Date("2024-02-20"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpenses: ({ description, amount, date }) => {},
  deleteExpenses: (id) => {},
  updateExpenses: (id, { description, amount, date }) => {},
});

function expenseReduce(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state, DUMMY_EXPENSES];
      break;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
      break;
    case "UPDATE":
      const updatableExpenseId = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseId];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseId] = updatedItem;
      return updatedExpenses;
      break;

    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expenseReduce, DUMMY_EXPENSES);
  function addExpenses(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }
  function updateExpenses(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  function deleteExpenses(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  const value = {
    expenses: expensesState,
    addExpenses: addExpenses,
    updateExpenses: updateExpenses,
    deleteExpenses: deleteExpenses,
  };
  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}
export default ExpensesContextProvider;
