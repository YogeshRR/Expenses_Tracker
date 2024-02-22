import { View, Text } from "react-native";
function ExpensesSummary({ expensesPeriodName, expenses }) {
  const summaryExpenses = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View>
      <Text>{expensesPeriodName}</Text>
      <Text>${summaryExpenses}</Text>
    </View>
  );
}
export default ExpensesSummary;
