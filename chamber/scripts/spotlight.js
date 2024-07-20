const url = "https://jngarner20.github.io/wdd230/chamber/data/members.json";
const Title = document.querySelector("#spotlightTitle");
const Image = document.querySelector("#spotlightImg");

async function getMemberData() {
  await fetch(url);
  const response = await fetch(url);
  const data = await response.json();

  displayMembers(data.company);
}

const displayMembers = (company) => {
  const randomIndex = Math.floor(Math.random() * company.length);
  Title.innerHTML = `${company[randomIndex].name}`;
  Image.innerHTML = `${company[randomIndex].imageurl}`;

  console.log(member.imageurl);

  image.setAttribute("src", member.imageurl);
  image.setAttribute("alt", `Picture of ${member.name}`);
  image.setAttribute("loading", "lazy");
  image.setAttribute("width", "85");
  image.setAttribute("height", "110");

};

getMemberData();
