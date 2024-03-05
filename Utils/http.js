import axios from "axios";
const EXPENSES_URL = "https://expensetracker-553d0-default-rtdb.firebaseio.com";
export function ExportData(exportData) {
  axios.post(EXPENSES_URL + "/exportData.json", exportData);
}

export async function GetData() {
  const response = await axios.get(EXPENSES_URL + "/exportData.json");

  const expenseData = [];

  for (id in response.data) {
    const expenseObj = {
      id: id,
      amount: response.data[id].amount,
      date: new Date(response.data[id].date),
      description: response.data[id].description,
    };
    expenseData.push(expenseObj);
    return expenseData;
  }
}
