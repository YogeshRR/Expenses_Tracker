import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
function ExpensesOutput({ expenses, expensesPeriodName }) {
  return (
    <View>
      <ExpensesSummary
        expenses={expenses}
        expensesPeriodName={expensesPeriodName}
      />
      <ExpensesList />
    </View>
  );
}
export default ExpensesOutput;
