import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import ManageExpense from "./screens/ManageExpnes";
import TabSetup from "./TabSetup";

const Stack = createNativeStackNavigator();
function NavigationSetup() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabSetup"
          component={TabSetup}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ManageExpenses" component={ManageExpense} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default NavigationSetup;
