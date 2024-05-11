const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
  if (input.value) {
    //create an li element
    const li = document.createElement("li");

    //create a delete button
    const deleteButton = document.createElement("button");

    //populate the li ements textContent or Inner....
    li.textContent = input.value;

    //populate the button text with an x
    deleteButton.textContent = "❌";

    //append the li element with the delete button
    li.appendChild(deleteButton);
    //append the li element to the unordered list in your HTML
    list.appendChild(li);
    //append the li element to the unordered list in your HTML
    deleteButton.addEventListener("click", () => {
      list.removeChild(li);
      clearInput();
    });
  } else {
    input.focus();
  }
  clearInput();
});

function clearInput() {
  input.focus();
  input.value = "";
}
