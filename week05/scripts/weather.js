//select HTML elements
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

//ure to openweather API
const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=49.74861580942537&lon=6.634989387916843&appid=b064236c485f7425faae9f2323e0ab7a&units=imperial";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  const desc = data.weather[0].description;

  //update images
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;
}
