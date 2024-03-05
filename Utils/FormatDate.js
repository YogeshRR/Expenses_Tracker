export function FormatDate(date) {
  // return `${date.getFullYear()} - ${date.getMonth() + 1} - ${date.getDate()}`;
  const newValue = `${date.getFullYear()} - ${date.getMonth()} - ${date.getDate()}`;
  return newValue;
}
