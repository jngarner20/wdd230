const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// button.addEventListener("click", () => {
//   if (input.value) {
//     //create an li element
//     const li = document.createElement("li");

//     //create a delete button
//     const deleteButton = document.createElement("button");

//     //populate the li ements textContent or Inner....
//     li.textContent = input.value;

//     //populate the button text with an x
//     deleteButton.textContent = "❌";

//     //append the li element with the delete button
//     li.appendChild(deleteButton);
//     //append the li element to the unordered list in your HTML
//     list.appendChild(li);
//     //append the li element to the unordered list in your HTML
//     deleteButton.addEventListener("click", () => {
//       list.removeChild(li);
//       clearInput();
//     });
//   } else {
//     input.focus();
//   }
//   clearInput();
// });

button.addEventListener("click", () => {
  if (input.value != "") {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = "";
    input.focus();
  }
});

function clearInput() {
  input.focus();
  input.value = "";
}

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

function displayList(item) {
  let li = document.createElement("li");
  let deletebutton = document.createElement("button");
  li.textContent = item; // note the use of the displayList parameter 'item'
  deletebutton.textContent = "❌";
  deletebutton.classList.add("delete"); // this references the CSS rule .delete{width:fit-content;} to size the delete button
  li.append(deletebutton);
  list.append(li);
  deletebutton.addEventListener("click", function () {
    list.removeChild(li);
    deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
    input.focus(); // set the focus back to the input
  });
}

function setChapterList() {
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}
