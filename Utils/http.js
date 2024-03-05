import axios from "axios";
export function ExportData(exportData) {
  axios.post(
    "https://expensetracker-553d0-default-rtdb.firebaseio.com/exportData.json",
    exportData
  );
}
