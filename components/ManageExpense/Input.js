import { View, Text, TextInput, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Input({ label, textInputConfig, style, isInValid }) {
  const inputStyle = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyle.push(styles.inputMultiLine);
  }

  if (isInValid) {
    inputStyle.push(styles.errorInput);
  }

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, isInValid && styles.errorLabel]}>
        {label}
      </Text>
      <TextInput style={inputStyle} {...textInputConfig} />
    </View>
  );
}
export default Input;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    marginBottom: 4,
    color: GlobalStyles.colors.primary100,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiLine: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  errorLabel: {
    color: GlobalStyles.colors.error500,
  },
  errorInput: {
    backgroundColor: GlobalStyles.colors.error50,
  },
});
