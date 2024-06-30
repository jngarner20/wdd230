const baseURL = "https://jngarner20.github.io/wdd230/";
const linksURL = "https://jngarner20.github.io/wdd230/data/links.json";
const learningactivities = document.querySelector("#learning");

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.weeks);
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

  weeks.forEach((week) => {
    const activity = document.createElement("section");
    const weekNumber = document.createElement("p");

    activity.appendChild(weekNumber);
    activity.setAttribute("class", "activity");

    learningactivities.appendChild(activity);

    weekNumber.textContent = `${week.week}:`;
    week.links.forEach((link) => {
      const button = document.createElement("a");
      // linkString += `${link.url} | `;
      button.textContent = link.title + "   |   ";
      button.setAttribute("href", link.url);
      button.setAttribute("class", "linkforbutton");

      activity.appendChild(button);
      learningactivities.appendChild(activity);
    });
    // button.textContent = linkString;
  });
};
