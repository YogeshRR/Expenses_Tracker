import { View, StyleSheet, Text, Alert } from "react-native";
import { useState } from "react";

import Input from "./Input";
import CustomButton from "../UI/CustomButton";
import { GlobalStyles } from "../../constants/styles";

function InputForms({ onCancel, titleLabel, onSubmit, expenseItem }) {
  const [inputs, setInputs] = useState({
    amount: {
      value: expenseItem ? expenseItem.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: expenseItem ? expenseItem.date.toISOString().slice(0, 10) : "",
      isValid: true,
    },
    description: {
      value: expenseItem ? expenseItem.description : "",
      isValid: true,
    },
  });

  function inputValueChangeHandler(inputIdentifier, enteredText) {
    setInputs((curInput) => {
      return {
        ...curInput,
        [inputIdentifier]: { value: enteredText, isValid: true },
      };
    });
  }
  function submitEventHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };
    const amountValidation =
      !isNaN(inputs.amount.value) && inputs.amount.value > 0;
    const dateValidation = inputs.date.value.toString() === "Invalid Date";
    const descriptionValidation = inputs.description.value.trim().length > 0;
    if (!amountValidation || !dateValidation || !descriptionValidation) {
      //Alert.alert("Error", "Please enter correct data", ["Okay"]);
      setInputs((inputs) => {
        return {
          amount: { value: inputs.amount.value, isValid: amountValidation },
          date: { value: inputs.date.value, isValid: dateValidation },
          description: {
            value: inputs.description.value,
            isValid: descriptionValidation,
          },
        };
      });
      return;
    }
    onSubmit(expenseData);
  }
  const isValidDataCheck =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;
  return (
    <View style={styles.forms}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.formsInputRow}>
        <Input
          label="Amount"
          isInValid={!inputs.amount.isValid}
          style={styles.formsInput}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputValueChangeHandler.bind(this, "amount"),
            value: inputs.amount.value,
          }}
        />
        <Input
          label="Date"
          isInValid={!inputs.date.isValid}
          style={styles.formsInput}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputValueChangeHandler.bind(this, "date"),
            value: inputs.date.value,
          }}
        />
      </View>

      <Input
        label="Description"
        isInValid={!inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          onChangeText: inputValueChangeHandler.bind(this, "description"),
          value: inputs.description.value,
        }}
      />
      {isValidDataCheck && (
        <Text style={styles.errorText}>
          Invalid data - please check data is valid or not
        </Text>
      )}
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
  errorText: {
    margin: 8,
    color: GlobalStyles.colors.error500,
    fontSize: 15,
    textAlign: "center",
  },
});
