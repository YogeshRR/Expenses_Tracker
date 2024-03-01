import { View, StyleSheet } from "react-native";
import { useContext, useLayoutEffect } from "react";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";

import CustomButton from "../components/UI/CustomButton";
import ManageExpenses from "../components/ManageExpense/ManageExpenses";
import IconButton from "../components/UI/IconButton";

function ManageExpense({ route, navigation }) {
  const expensesCtx = useContext(ExpensesContext);
  const expenseId = route.params?.expenseId;
  const isEdit = !!expenseId;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEdit ? "Manage Expense" : "Add Expense",
    });
  }, [navigation, isEdit]);
  function deleteExpensesHandler() {
    expensesCtx.deleteExpenses(expenseId);
    navigation.goBack();
  }
  function cancelEventHandler() {
    navigation.goBack();
  }
  function submitEventHandler() {
    if (isEdit) {
      expensesCtx.updateExpenses(expenseId, {
        description: "Bring new Shoes",
        amount: 50,
        date: new Date("2024-12-26"),
      });
    } else {
      expensesCtx.addExpenses({
        description: "Bring new Shoes!!!!",
        amount: 50,
        date: new Date("2024-12-26"),
      });
    }
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <ManageExpenses />
      <View style={styles.buttonStyle}>
        <CustomButton
          buttonStyle={styles.buttons}
          mode="flat"
          onPress={cancelEventHandler}
        >
          Cancel
        </CustomButton>
        <CustomButton buttonStyle={styles.buttons} onPress={submitEventHandler}>
          {isEdit ? "Update" : "Add"}
        </CustomButton>
      </View>
      {isEdit && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            size={36}
            color={GlobalStyles.colors.error500}
            onPress={deleteExpensesHandler}
          />
        </View>
      )}
    </View>
  );
}
export default ManageExpense;

const styles = StyleSheet.create({
  deleteContainer: {
    marginTop: 16,
    padding: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
  container: {
    backgroundColor: GlobalStyles.colors.primary800,
    flex: 1,
    padding: 24,
  },
  buttonStyle: {
    flexDirection: "row",

    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    minWidth: 120,
  },
});
