import { useContext, useEffect } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
function RecentExpenses() {
  useEffect(() => {
    async function getExpenses() {
      const response = await GetData();
    }
    getExpenses();
  });
  const expensesCtx = useContext(ExpensesContext);
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDay(today, 7);
    return expense.date > date7DaysAgo;
  });

  function getDateMinusDay(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
  }
  return (
    <ExpensesOutput
      expensesPeriodName="Last 7 days Expenses"
      myExpenses={recentExpenses}
    />
  );
}
export default RecentExpenses;
