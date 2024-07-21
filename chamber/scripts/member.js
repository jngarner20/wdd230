const url = "https://jngarner20.github.io/wdd230/chamber/data/members.json";
const directory = document.querySelector("#directory");

async function getMemberData() {
  await fetch(url);
  const response = await fetch(url);
  const data = await response.json();

  displayMembers(data.company);
}

const displayMembers = (company) => {
  company.forEach((member) => {
    const card = document.createElement("section");
    const name = document.createElement("h3");
    const Address = document.createElement("p");
    const phone = document.createElement("p");
    const website = document.createElement("p");
    const image = document.createElement("img");
    const membership = document.createElement("p");

    card.setAttribute("class", "membercard");
    name.textContent = `${member.name}`;
    image.setAttribute("src", member.imageurl);
    image.setAttribute("alt", `Picture of ${member.name}`);
    image.setAttribute("loading", "lazy");
    image.setAttribute("width", "85");
    image.setAttribute("height", "110");
    Address.textContent = `${member.Address}`;
    phone.textContent = `${member.phone}`;
    membership.textContent = `${member.membership}`;

    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(Address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(membership);

    directory.appendChild(card);
  });
};

getMemberData();

//grid and list toggle buttons

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#directory");


gridbutton.addEventListener("click", () => {
  // example using arrow function
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}
