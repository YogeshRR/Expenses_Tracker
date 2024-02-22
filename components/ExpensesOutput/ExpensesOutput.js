import { View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

function ExpensesOutput({ expenses, expensesPeriodName }) {
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
  ];
  return (
    <View style={styles.container}>
      <ExpensesSummary
        expenses={DUMMY_EXPENSES}
        expensesPeriodName={expensesPeriodName}
      />
      <ExpensesList expenses={DUMMY_EXPENSES} />
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
