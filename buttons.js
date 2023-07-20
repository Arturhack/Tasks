// button.js

// Get a reference to the button elements using their class
const myButtons = document.getElementsByClassName("button");

// Define a function to be executed when any of the buttons are clicked
function buttonClickHandler(event) {
  // Get the current time when the button was pressed
  const currentTime = new Date();

  // Do whatever action you want here
  console.log("Button clicked! Current Time:", currentTime);

  // Redirect to 'started.html' after button click
  window.location.href = "started.html";

  // Save the current time to local storage
  localStorage.setItem("startTime", currentTime);
}

// Attach the click event listener to each button and specify the function to be executed
for (let i = 0; i < myButtons.length; i++) {
  myButtons[i].addEventListener("click", buttonClickHandler);
}
