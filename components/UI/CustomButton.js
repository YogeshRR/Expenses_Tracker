import { Pressable, StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";
function CustomButton({ children, onPress, mode, buttonStyle }) {
  return (
    <View style={buttonStyle}>
      <Pressable
        onPress={onPress}
        style={(pressed) => pressed && moreStyles.pressed}
      >
        <View
          style={[
            moreStyles.buttonContainer,
            mode === "flat" && moreStyles.flat,
          ]}
        >
          <Text
            style={[
              moreStyles.buttonText,
              mode === "flat" && moreStyles.flatText,
            ]}
          >
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
export default CustomButton;
const moreStyles = StyleSheet.create({
  buttonContainer: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    borderRadius: 4,
  },
});
