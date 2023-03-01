function timeConversion(time) {
  // Extract the hours, minutes, and period from the input string
  const period = time.slice(-2);
  let timeStr = time.slice(0, -2);
  let [hours, minutes, seconds] = timeStr.split(":");

  // Convert the hours to an integer and add 12 if the period is "PM"
  hours = parseInt(hours, 10);
  if (period === "PM" && hours < 12) {
    hours += 12;
  }

  // Handle special cases for midnight and noon
  if (hours === 12 && period === "AM") {
    hours = 0;
  } else if (hours === 12 && period === "PM") {
    hours = 12;
  }

  // Pad the hours and minutes with zeros if necessary
  hours = hours.toString().padStart(2, "0");
  minutes = minutes.padStart(2, "0");

  // Return the military time as a string
  return `${hours}:${minutes}:${seconds}`;
}

console.log(timeConversion("07:05:45PM"));
