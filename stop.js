// stop.js

// Get the stored start time and stop time from local storage
const storedStartTime = localStorage.getItem("startTime");
const storedStopTime = localStorage.getItem("stopTime");

// Convert the stored times back to Date objects
const startTime = storedStartTime ? new Date(storedStartTime) : null;
const stopTime = storedStopTime ? new Date(storedStopTime) : null;

// Function to calculate the time difference in milliseconds
function getTimeDifference(startTime, stopTime) {
  if (!startTime || !stopTime) return null;
  return stopTime.getTime() - startTime.getTime();
}

// Function to format milliseconds into a user-friendly format
function formatTime(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  return `${days} days, ${hours % 24} hours, ${minutes % 60} minutes, ${
    seconds % 60
  } seconds`;
}

// Get the time difference
const timeDifference = getTimeDifference(startTime, stopTime);

// Display the time difference on the page
const timeDifferenceElement = document.createElement("p");
timeDifferenceElement.textContent = `Time elapsed: ${formatTime(
  timeDifference
)}`;
document.body.appendChild(timeDifferenceElement);

// Do whatever you need with the start time and stop time
if (startTime) {
  console.log("Start Time:", startTime);
} else {
  console.log("Start Time not found in local storage.");
}

if (stopTime) {
  console.log("Stop Time:", stopTime);
} else {
  console.log("Stop Time not found in local storage.");
}
