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
const header = document.querySelector("header");
const nav = document.querySelector("nav ul");
const paragraphs = document.querySelectorAll("p");
const h2 = document.querySelectorAll("h2");
const a = document.querySelectorAll("nav a");

modeButton.addEventListener("click", () => {
  if (modeButton.textContent.includes("🕶️")) {
    body.style.background = "#000";
    body.style.color = "#fff";
    nav.style.background = "#808080";
    header.style.color = "#000";
    paragraphs.forEach((p) => (p.style.color = "#000"));
    h2.forEach((h2) => (h2.style.color = "#000"));
    a.forEach((a) => (a.style.color = "#fff"));
    modeButton.textContent = "🔆";
  } else {
    body.style.background = "#fff";
    body.style.color = "#000";
    nav.style.background = "#E8E8E8";
    modeButton.textContent = "🕶️";
  }
});

function getVisitCount() {
  //get the visit count from localstorage
  let count = localStorage.getItem("visitCount");

  if (count) {
    //increment the count, same thing as count = count+1
    count++;
  } else {
    //if there is no count in localStorage, set it to 1
    count = 1;
  }

  //store the new count in localStorage
  localStorage.setItem("visitCount", count);

  return count;
}

if (document.querySelector("#count")) {
  let visitCount = getVisitCount();
  document.querySelector("#count").textContent = visitCount;
}

//Confirm that second password matches the first

const kp1 = document.querySelector("#password");
const kp2 = document.querySelector("#passwordconfirm");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
  console.log("here");
  if (kp1.value !== kp2.value) {
    message.textContent = "Passwords do not match";
    message.style.visibility = "show";
    kp2.style.backgroundColor = "#fff0f3";
    kp2.value = "";
    kp1.value = "";
    kp1.focus();
  } else {
    message.style.display = "none";
    kp2.style.backgroundColor = "#fff";
    kp2.style.color = "#000";
  }
}

//Range Slider
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

// RANGE event listener
range.addEventListener("change", displayRatingValue);
range.addEventListener("input", displayRatingValue);

function displayRatingValue() {
  rangevalue.innerHTML = range.value;
}





