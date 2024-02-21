import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AllExpenses from "./screens/AllExpenses";
import ManageExpense from "./screens/ManageExpnes";
const Tab = createBottomTabNavigator();
function TabSetup() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AllExpenses" component={AllExpenses} />
      <Tab.Screen name="RecentExpenses" component={ManageExpense} />
    </Tab.Navigator>
  );
}
export default TabSetup;
