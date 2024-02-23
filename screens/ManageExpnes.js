import { Text } from "react-native";
import { useLayoutEffect } from "react";
function ManageExpense({ route, navigation }) {
  const expenseId = route.params?.expenseId;
  const isEdit = !!expenseId;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEdit ? "Manage Expense" : "Add Expense",
    });
  }, [navigation, isEdit]);

  return <Text>Manage Expense</Text>;
}
export default ManageExpense;
