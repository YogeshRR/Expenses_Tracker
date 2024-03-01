import { View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

function ExpensesOutput({ myExpenses, expensesPeriodName }) {
  let content = <Text>You don't have expenses now!!!</Text>;
  if (myExpenses.length > 0) {
    content = <ExpensesList expenses={myExpenses} />;
  }
  return (
    <View style={styles.container}>
      <ExpensesSummary
        expenses={myExpenses}
        expensesPeriodName={expensesPeriodName}
      />
      {content}
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
    textStyle: {
        fontSize : 16,
    }
});
