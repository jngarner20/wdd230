const url ="https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getProphetData() {
    await fetch(url)
        const response = await fetch(url);
        const data = await response.json();

        displayProphets(data.prophets);
        //Temp:
       // console.table(data.prophets);
}

const displayProphets = (prophets) => {
    //card build code goes here
    prophets.forEach((prophet) =>{
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const birthDate = document.createElement("p");
        const birthPlace = document.createElement("p");
        const portrait = document.createElement("img");
        

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '85');
        portrait.setAttribute('height', '110');

        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
};

getProphetData();