import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import ManageExpense from "./screens/ManageExpnes";
import TabSetup from "./TabSetup";
import { GlobalStyles } from "./constants/styles";

const Stack = createNativeStackNavigator();
function NavigationSetup() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="TabSetup"
          component={TabSetup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ManageExpenses"
          component={ManageExpense}
          options={{
            presentation: "modal",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default NavigationSetup;
