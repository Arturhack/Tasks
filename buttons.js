// button.js

// Get a reference to the button elements using their class
const myButtons = document.getElementsByClassName("button");

// Function to handle the "Click me!" button click
function buttonClickHandler(event) {
  // Get the current time when the button was pressed
  const currentTime = new Date();

  // Save the current page and visit time to session storage
  sessionStorage.setItem("lastVisitedPage", window.location.href);
  sessionStorage.setItem("lastVisitTime", currentTime);

  // Redirect to 'started.html' after button click
  window.location.href = "started.html";
}

// Attach the click event listener to each button and specify the function to be executed
for (let i = 0; i < myButtons.length; i++) {
  myButtons[i].addEventListener("click", buttonClickHandler);
}
