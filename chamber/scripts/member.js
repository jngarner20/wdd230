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
    const name = document.createElement("p");
    const Address = document.createElement("p");
    const phone = document.createElement("p");
    const website = document.createElement("p");
    const image = document.createElement("img");
    const membership = document.createElement("p");

    name.textContent = `${member.name}`;
    Address.textContent = `Date of Birth: ${prophet.birthdate}`;
    phone.textContent = `Place of Birth: ${prophet.birthplace}`;
    image.setAttribute("src", prophet.imageurl);
    image.setAttribute("alt", `Picture of ${prophet.name} ${prophet.lastname}`);
    image.setAttribute("loading", "lazy");
    image.setAttribute("width", "85");
    image.setAttribute("height", "110");
    membership.textContent = `Place of Birth: ${prophet.birthplace}`;

    card.appendChild(name);
    card.appendChild(Address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(image);
    card.appendChild(membership);

    directory.appendChild(card);
  });
};

getMemberData();
