import { View, ActivityIndicator, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function LoadingOverLay() {
  return (
    <View style={styles.activityView}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
}
export default LoadingOverLay;

const styles = StyleSheet.create({
  activityView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
