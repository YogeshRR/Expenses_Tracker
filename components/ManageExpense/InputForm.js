import { View, StyleSheet, Text } from "react-native";
import Input from "./Input";

function InputForms() {
  function amountChangeHandler() {}
  return (
    <View style={styles.forms}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.formsInputRow}>
        <Input
          label="Amount"
          style={styles.formsInput}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onTextChange: amountChangeHandler,
          }}
        />
        <Input
          label="Date"
          style={styles.formsInput}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onTextChange: () => {},
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
        }}
      />
    </View>
  );
}
export default InputForms;

const styles = StyleSheet.create({
  formsInputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  formsInput: {
    flex: 1,
  },
  forms: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    color: "white",
    marginVertical: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
});
