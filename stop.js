// stop.js

// Get the time elapsed from the URL parameter
const urlParams = new URLSearchParams(window.location.search);
const timeElapsed = urlParams.get("timeElapsed");

// Function to format time into a user-friendly format
function formatTime(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  return `${days} days, ${hours % 24} hours, ${minutes % 60} minutes, ${
    seconds % 60
  } seconds`;
}

// Display the time elapsed on the page
const timeElapsedElement = document.createElement("p");
timeElapsedElement.textContent = `Time elapsed: ${formatTime(timeElapsed)}`;
document.body.appendChild(timeElapsedElement);

// Get a reference to the "Back to Home" button using its id
const backButton = document.getElementById("backButton");

// Function to handle the "Back to Home" button click
function backButtonClickHandler(event) {
  // Clear the start and stop times from session storage
  sessionStorage.removeItem("startTime");
  sessionStorage.removeItem("stopTime");

  // Redirect back to the last visited page when the "Back to Home" button is clicked
  const lastVisitedPage = sessionStorage.getItem("lastVisitedPage");
  if (lastVisitedPage) {
    window.location.href = lastVisitedPage;
  } else {
    // If no last visited page is stored, redirect to 'index.html'
    window.location.href = "index.html";
  }
}

// Attach the click event listener to the "Back to Home" button
backButton.addEventListener("click", backButtonClickHandler);
