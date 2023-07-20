// back.js

// Get a reference to the "Back" button using its id
const backButton = document.getElementById("backButton");

// Define a function to be executed when the "Back" button is clicked
function backButtonClickHandler(event) {
  // Redirect back to 'index.html' when the "Back" button is clicked
  window.location.href = "index.html";
}

// Attach the click event listener to the "Back" button
backButton.addEventListener("click", backButtonClickHandler);
