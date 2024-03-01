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
      <Input
        label="Date"
        textConfigue={{
          placeHolder: "YYYY-MM-DD",
          maxLength: 10,
          onTextChange: () => {},
        }}
      />
      <Input
        label="Description"
        textConfigue={{
          autoCorrect: false,
          autoCaption: true,
        }}
      />
    </View>
  );
}
export default ManageExpenses;
