export function capitalizeFirstLetter(string) {
  if (string.length === 0) return string; // Handle empty string
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const formatDateToDDMMYYYY = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

export function getTodayFormattedDate() {
  const today = new Date();
  const day = today.getDate().toString().padStart(2, "0");
  const month = today
    .toLocaleString("default", { month: "short" })
    .toLowerCase();
  const year = today.getFullYear();
  return `${day}/${month}/${year}`;
}

export function formatCurrencty(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
