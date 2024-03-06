import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { fetchData } from "../Utils/http";
import LoadingOverLay from "../components/UI/LoadingOverLay";
function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  const [isFetching, setFetching] = useState(true);
  //const [allExpesnes, setExpenseData] = useState([]);
  useEffect(() => {
    async function getExpenses() {
      setFetching(true);
      const response = await fetchData();
      expensesCtx.setExpenses(response);
      setFetching(false);
    }
    getExpenses();
  }, []);

  if (isFetching) {
    return <LoadingOverLay />;
  }
  // expensesCtx.expenses
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
