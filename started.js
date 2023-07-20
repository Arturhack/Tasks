// started.js

// Function to handle the "Stop" button click
function stopButtonClickHandler(event) {
  // Get the current time when the "Stop" button was pressed
  const stopTime = new Date();

  // Get the stored start time from session storage
  const storedStartTime = sessionStorage.getItem("startTime");

  // Calculate the time difference
  const timeElapsed = getTimeDifference(new Date(storedStartTime), stopTime);

  // Store the stop time in session storage
  sessionStorage.setItem("stopTime", stopTime);

  // Redirect to 'stop.html' after the "Stop" button is pressed, passing the timeElapsed as a URL parameter
  window.location.href = `stop.html?timeElapsed=${timeElapsed}`;
}

// Attach the click event listener to the "Stop" button
const stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopButtonClickHandler);

// Function to calculate the time difference in milliseconds
function getTimeDifference(startTime, stopTime) {
  if (!startTime || !stopTime) return null;
  return stopTime.getTime() - startTime.getTime();
}

// Store the start time in session storage when the page is loaded
const storedStartTime = sessionStorage.getItem("startTime");
if (!storedStartTime) {
  sessionStorage.setItem("startTime", new Date());
}

// Do whatever you need with the start time
const startTime = storedStartTime ? new Date(storedStartTime) : null;
if (startTime) {
  console.log("Stored Start Time:", startTime);
} else {
  console.log("Start Time not found in session storage.");
}
