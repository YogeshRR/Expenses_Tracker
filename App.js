import { StatusBar } from "expo-status-bar";
import NavigationSetup from "./NavigationSetup";
import ExpensesContextProvider from "./store/expenses-context";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ExpensesContextProvider>
        <NavigationSetup />
      </ExpensesContextProvider>
    </>
  );
}
