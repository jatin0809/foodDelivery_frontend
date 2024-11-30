export function formatDate(dbDate) {
    const date = new Date(dbDate);
  
    // Extract the day, month, and year
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
  
    // Return the formatted string
    return `${day}, ${month} ${year}`;
  }