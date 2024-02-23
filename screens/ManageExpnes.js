import { View, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";

import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import CustomButton from "../components/UI/CustomButton";
function ManageExpense({ route, navigation }) {
  const expenseId = route.params?.expenseId;
  const isEdit = !!expenseId;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEdit ? "Manage Expense" : "Add Expense",
    });
  }, [navigation, isEdit]);
  function deleteExpensesHandler() {
    navigation.goBack();
  }
  function cancelEventHandler() {
    navigation.goBack();
  }
  function submitEventHandler() {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
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
