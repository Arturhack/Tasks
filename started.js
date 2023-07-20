// started.js

// Get a reference to the "stop" button using its class
const stopButton = document.querySelector(".stopButton");

// Define a function to be executed when the "stop" button is clicked
function stopButtonClickHandler(event) {
  // Get the current time when the "stop" button was pressed
  const stopTime = new Date();

  // Do whatever action you want here with the stopTime
  console.log("Stop button clicked! Current Time:", stopTime);

  // Save the stop time to local storage (optional, if you need it in the next page)
  localStorage.setItem("stopTime", stopTime);

  // Redirect to 'stop.html' after the "stop" button is pressed
  window.location.href = "stop.html";
}

// Attach the click event listener to the "stop" button
stopButton.addEventListener("click", stopButtonClickHandler);

// Get the stored start time from local storage
const storedStartTime = localStorage.getItem("startTime");

// Convert the stored time back to a Date object
const startTime = storedStartTime ? new Date(storedStartTime) : null;

// Do whatever you need with the startTime
if (startTime) {
  console.log("Stored Start Time:", startTime);
} else {
  console.log("Start Time not found in local storage.");
}
