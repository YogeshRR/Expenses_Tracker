import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      myExpenses={expensesCtx.expenses}
      expensesPeriodName="Total"
    />
  );
}
export default AllExpenses;
