
// Banner close button

// const closeButton = document.querySelector("#close");
// const banner = document.querySelector("#banner");

// closeButton.addEventListener("click", () => {
//   banner.style.display = "none";
// });

const closeButton = document.querySelector("#close");
const banner = document.querySelector("#banner");

// Function to check if the banner should be shown
function shouldShowBanner() {
  const today = new Date().getDay();

  
  const showDays = [1, 2, 3, 0]; 

  return showDays.includes(today);
}

// Function to initialize the banner
function initializeBanner() {
  if (shouldShowBanner()) {
    banner.style.display = "flex"; // or whatever your default display style is
  } else {
    banner.style.display = "none";
  }
}

// Event listener for the close button
closeButton.addEventListener("click", () => {
  banner.style.display = "none";
});

// Call the initialize function when the page loads
initializeBanner();
