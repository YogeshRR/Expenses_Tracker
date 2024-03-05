import { View, StyleSheet } from "react-native";
import { useContext, useLayoutEffect } from "react";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";
import { deleteData, exportData, updateData } from "../Utils/http";

import InputForms from "../components/ManageExpense/InputForm";
import IconButton from "../components/UI/IconButton";

function ManageExpense({ route, navigation }) {
  const expensesCtx = useContext(ExpensesContext);
  const expenseId = route.params?.expenseId;
  const expenseItemToUpdate = expensesCtx.expenses.find(
    (expense) => expense.id === expenseId
  );
  const isEdit = !!expenseId;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEdit ? "Manage Expense" : "Add Expense",
    });
  }, [navigation, isEdit]);
  async function deleteExpensesHandler() {
    await deleteData(expenseId);
    expensesCtx.deleteExpenses(expenseId);

    navigation.goBack();
  }
  function cancelEventHandler() {
    navigation.goBack();
  }
  async function submitEventHandler(expenseData) {
    if (isEdit) {
      await updateData(expenseId, expenseData);
      expensesCtx.updateExpenses(expenseId, expenseData);
    } else {
      const id = await exportData(expenseData);
      expensesCtx.addExpenses({ ...expenseData, id: id });
    }
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <InputForms
        titleLabel={isEdit ? "Update" : "Add"}
        onSubmit={submitEventHandler}
        onCancel={cancelEventHandler}
        expenseItem={expenseItemToUpdate}
      />

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
});
