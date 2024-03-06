import { View, StyleSheet } from "react-native";
import { useContext, useLayoutEffect, useState } from "react";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";
import { deleteData, exportData, updateData } from "../Utils/http";

import InputForms from "../components/ManageExpense/InputForm";
import IconButton from "../components/UI/IconButton";
import LoadingOverLay from "../components/UI/LoadingOverLay";

function ManageExpense({ route, navigation }) {
  const [isFetching, setFetching] = useState(false);
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
    setFetching(true);
    await deleteData(expenseId);
    expensesCtx.deleteExpenses(expenseId);
    setFetching(false);
    navigation.goBack();
  }
  function cancelEventHandler() {
    navigation.goBack();
  }
  async function submitEventHandler(expenseData) {
    if (isEdit) {
      setFetching(true);
      await updateData(expenseId, expenseData);
      expensesCtx.updateExpenses(expenseId, expenseData);
      setFetching(false);
    } else {
      setFetching(true);
      const id = await exportData(expenseData);
      expensesCtx.addExpenses({ ...expenseData, id: id });
      setFetching(false);
    }
    navigation.goBack();
  }
  if (isFetching) {
    return <LoadingOverLay />;
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
