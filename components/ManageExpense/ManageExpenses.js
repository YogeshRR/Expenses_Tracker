import { View } from "react-native";
import Input from "./Input";

function ManageExpenses() {
  function amountChangeHandler() {}
  return (
    <View>
      <Input
        label="Amount"
        textConfigue={{
          keyboardType: "decimal-pad",
          onTextChange: amountChangeHandler,
        }}
      />
      <Input label="Date" />
      <Input label="Description" />
    </View>
  );
}
export default ManageExpenses;
