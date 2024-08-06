export const extractDateFromCreatedAt = (createdAt) => {
    const date = new Date(createdAt);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
  
    return `${day}-${month}-${year}`;
  };
  
  // Example usage:
  const createdAt = "2024-08-05T12:34:56.789Z"; // This is typically how createdAt is stored
  const formattedDate = extractDateFromCreatedAt(createdAt);
  console.log(formattedDate); // Output: "05-08-2024"
  