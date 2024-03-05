import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ExpensesSummary({ expenses, expensesPeriodName }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.periodText}>{expensesPeriodName}</Text>
      <Text style={styles.summaryText}>${expensesSum}</Text>
    </View>
  );
}
export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    alignItems: "center",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  periodText: {
    fontSize: 18,
    color: GlobalStyles.colors.primary400,
  },
  summaryText: {
    fontSize: 18,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
