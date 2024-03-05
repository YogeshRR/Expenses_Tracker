import { View, StyleSheet, Text } from "react-native";
import { useState } from "react";

import Input from "./Input";
import CustomButton from "../UI/CustomButton";
import dayjs from "dayjs";

function InputForms({ onCancel, titleLabel, onSubmit, expenseItem }) {
  console.log(expenseItem.date);
  const [inputValue, setInputValue] = useState({
    amount: expenseItem ? expenseItem.amount.toString() : "",

    date: expenseItem
      ? expenseItem.date.toISOString().slice(0, 10)
      : "Here I am",
    description: expenseItem ? expenseItem.description : "",
  });

  function inputValueChangeHandler(inputIdentifier, enteredText) {
    setInputValue((curInputValue) => {
      return {
        ...curInputValue,
        [inputIdentifier]: enteredText,
      };
    });
  }
  function submitEventHandler() {
    const expenseData = {
      amount: +inputValue.amount,
      date: new Date(inputValue.date),
      description: inputValue.description,
    };

    onSubmit(expenseData);
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
      <View style={styles.buttonStyle}>
        <CustomButton
          buttonStyle={styles.buttons}
          mode="flat"
          onPress={onCancel}
        >
          Cancel
        </CustomButton>
        <CustomButton buttonStyle={styles.buttons} onPress={submitEventHandler}>
          {titleLabel}
        </CustomButton>
      </View>
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
  buttonStyle: {
    flexDirection: "row",

    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    minWidth: 120,
  },
});
