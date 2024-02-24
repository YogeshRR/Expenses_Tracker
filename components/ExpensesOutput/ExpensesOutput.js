import { View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

function ExpensesOutput({ myExpenses, expensesPeriodName }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary
        expenses={myExpenses}
        expensesPeriodName={expensesPeriodName}
      />
      <ExpensesList expenses={myExpenses} />
    </View>
  );
}
export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
