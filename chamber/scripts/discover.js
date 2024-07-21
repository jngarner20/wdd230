function getMessage() {
  //get the current date
  let currentDate = new Date();
  let storedDate;
  let message;

  //get the date from local storage
  let date = localStorage.getItem("date");

  if (date) {
    //convert the stored date to a date object
    storedDate = new Date(parseInt(date));
  }

  //compare the dates and return the appropriate message
  if (date) {
    let differenceInTime = currentDate.getTime() - storedDate.getTime();

    if (differenceInTime < 86400000) {
      message = "Back so soon! Awesome!";
    } else {
      let differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
      message = `You last visited ${differenceInDays} days ago.`;
    }
  } else {
    message = "Welcome! Let us know if you have any questions!";
  }

  //store date in local storage
  localStorage.setItem("date", currentDate.getTime());

  return message;
}

let displayMessage = getMessage();
document.querySelector("#message").textContent = displayMessage;

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

let visitCount = getVisitCount();
document.querySelector("#count").textContent = visitCount;
