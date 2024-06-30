const baseURL = "https://jngarner20.github.io/wdd230/";
const linksURL = "https://jngarner20.github.io/wdd230/data/links.json";
const learningactivities = document.querySelector("#learning");

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

getLinks();

// const displayLinks = (weeks) => {
//   //card build code goes here
//   weeks.forEach((week) => {
//     const activity = document.createElement("section");
//     const weekNumber = document.createElement("h3");

//     weekNumber.textContent = `${weeks[0].week}|`;

//     activity.appendChild(weekNumber);

//     learningactivities.appendChild(activity);
//   });
// };

const displayLinks = (weeks) => {
  //card build code goes here

  const activity = document.createElement("section");
  const weekNumber = document.createElement("p");
  const link = document.createElement("a");

  weekNumber.textContent = `${weeks[0]}|`;
  link.textContent = "Week";
  link.setAttribute("href", linksURL.links);

  activity.appendChild(weekNumber);
  activity.appendChild(link);

  learningactivities.appendChild(activity);
};
