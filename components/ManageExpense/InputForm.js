import { View, StyleSheet, Text } from "react-native";
import { useState } from "react";

import Input from "./Input";

function InputForms() {
  const [inputValue, setInputValue] = useState({
    amount: "",
    date: "",
    description: "",
  });
  function inputValueChangeHandler(inputIdentifier, enteredText) {
    setInputValue((curInputValue) => {
      return {
        ...curInputValue,
        [inputIdentifier]: enteredText,
      };
    });
  }
  return (
    <View style={styles.forms}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.formsInputRow}>
        <Input
          label="Amount"
          style={styles.formsInput}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputValueChangeHandler.bind(this, "amount"),
            value: inputValue.amount,
          }}
        />
        <Input
          label="Date"
          style={styles.formsInput}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputValueChangeHandler.bind(this, "date"),
            value: inputValue.date,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputValueChangeHandler.bind(this, "description"),
          value: inputValue.description,
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
