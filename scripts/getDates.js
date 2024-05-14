const lastModifiedElement = document.getElementById("lastModified");

// Get the current date
const currentDate = new Date();

// Get the last modified date in the desired format
const lastModifiedDate = currentDate.toLocaleString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});

// Set the text content of the lastModified element
lastModifiedElement.textContent = `Last Modified: ${lastModifiedDate}`;

//js for
const currentYear = new Date().getFullYear();

const copyrightElement = document.querySelector("footer p:first-child");

copyrightElement.textContent = `©${currentYear} Jessica Garner Colorado`;

//Dark Mode
const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
  if (modeButton.textContent.includes("🕶️")) {
    body.style.background = "#000";
    body.style.color = "#fff";
    modeButton.textContent = "🔆";
  } else {
    body.style.background = "#fff";
    body.style.color = "#000";
    Headers.style.background - "#ff97ab";
    modeButton.textContent = "🕶️";
  }
});
