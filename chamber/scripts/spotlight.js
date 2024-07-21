const url = "https://jngarner20.github.io/wdd230/chamber/data/members.json";
const Title = document.querySelector("#spotlightTitle");
const photo = document.querySelector("#spotlightImg");

async function getMemberData() {
  await fetch(url);
  const response = await fetch(url);
  const data = await response.json();

  displayMembers(data.company);
}

const displayMembers = (company) => {
  const eligibleMembers = company.filter(
    (company) =>
      company.membership === "Gold Membership" ||
      company.membership === "Silver Membership"
  );

  if (eligibleMembers.length === 0) {
    console.log("No gold or silver members found");
    return;
  }

  const randomIndex = Math.floor(Math.random() * eligibleMembers.length);

  Title.innerHTML = `${company[randomIndex].name}`;
  photo.innerHTML = `${company[randomIndex].imageurl}`;

  photo.setAttribute("src", `${company[randomIndex].imageurl}`);
  photo.setAttribute("alt", `Picture of ${company[randomIndex].name}`);
  photo.setAttribute("loading", "lazy");
  photo.setAttribute("width", "40%");
};

getMemberData();

// const url = "https://jngarner20.github.io/wdd230/chamber/data/members.json";
// const Title = document.querySelector("#spotlightTitle");
// const photo = document.querySelector("#spotlightImg");

// async function getMemberData() {
//   const response = await fetch(url);
//   const data = await response.json();
//   displayMembers(data.company);
// }

// const displayMembers = (company) => {
//   // Filter for gold and silver members
//   const eligibleMembers = company.filter(
//     (member) =>
//       member.membership === "Gold Membership" ||
//       member.membership === "Silver Membership"
//   );

//   if (eligibleMembers.length === 0) {
//     console.log("No gold or silver members found");
//     return;
//   }

//   const randomIndex = Math.floor(Math.random() * eligibleMembers.length);
//   const selectedMember = eligibleMembers[randomIndex];

//   Title.innerHTML = selectedMember.name;

//   photo.src = selectedMember.imageurl;
//   photo.alt = `Picture of ${selectedMember.name}`;
//   photo.loading = "lazy";
//   photo.width = "60%";
// };

// getMemberData();
