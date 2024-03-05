import axios from "axios";
const EXPENSES_URL = "https://expensetracker-553d0-default-rtdb.firebaseio.com";
export async function exportData(exportData) {
  const response = await axios.post(
    EXPENSES_URL + "/exportData.json",
    exportData
  );
  const id = response.data.name;

  return id;
}

export async function fetchData() {
  const response = await axios.get(EXPENSES_URL + "/exportData.json");

  const expenseData = [];

  for (key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenseData.push(expenseObj);
  }
  return expenseData;
}
