// Weather API

//select HTML elements
const weatherTemp = document.querySelector("#weathertemp");
const weatherIcon = document.querySelector("#weather-icon");
const weatherDescription = document.querySelector("#weatherdescription");
const forecast1 = document.querySelector("#forecast1");
const forecastIcon1 = document.querySelector("#forecast-weather-icon-1");
const forecast2 = document.querySelector("#forecast2");
const forecastIcon2 = document.querySelector("#forecast-weather-icon-2");
const forecast3 = document.querySelector("#forecast3");
const forecastIcon3 = document.querySelector("#forecast-weather-icon-3");
const dayTitle = document.querySelector(".day");

//ure to openweather API
const weatherUrl =
  "https://api.openweathermap.org/data/2.5/weather?lat=34.05524553683239&lon=-117.17995791990572&appid=b064236c485f7425faae9f2323e0ab7a&units=imperial";
const forecastUrl =
  "https://api.openweathermap.org/data/2.5/forecast?lat=34.05524553683239&lon=-117.17995791990572&appid=b064236c485f7425faae9f2323e0ab7a&units=imperial";

async function apiFetch(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // console.log(data); // this is for testing the call
      // displayResults(data);
      return data;
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

async function getData() {
  const currentWeather = await apiFetch(weatherUrl);
  displayResults(currentWeather);

  const forecastWeather = await apiFetch(forecastUrl);
  displayForecast(forecastWeather);
}
getData();

function displayResults(data) {
  // console.log(data);
  weatherTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  const desc = data.weather[0].description;
  // forecast.innerHTML = `${data.list[0].main.temp.toFixed(0)}&deg;F`;

  //update images
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  weatherDescription.textContent = desc;
}

// function displayForecast(data) {
//   forecast1.innerHTML = `${data.list[0].main.temp.toFixed(0)}&deg;F`;
//   const forecastIconsrc1 = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
//   forecast2.innerHTML = `${data.list[1].main.temp.toFixed(0)}&deg;F`;
//   const forecastIconsrc2 = `https://openweathermap.org/img/w/${data.list[1].weather[0].icon}.png`;
//   forecast3.innerHTML = `${data.list[2].main.temp.toFixed(0)}&deg;F`;
//   const forecastIconsrc3 = `https://openweathermap.org/img/w/${data.list[2].weather[0].icon}.png`;

//   const forecastDate = new Date(data.list[0].dt_txt);

//   const options = { month: "long", day: "numeric" };
//   const formattedDate = forecastDate.toLocaleDateString("en-US", options);

//   dayTitle.innerHTML = formattedDate;

//   forecastIcon1.setAttribute("src", forecastIconsrc1);
//   forecastIcon2.setAttribute("src", forecastIconsrc2);
//   forecastIcon3.setAttribute("src", forecastIconsrc3);
// }
function displayForecast(data) {
  for (let i = 0; i < 3; i++) {
    // Format and display the date
    const forecastDate = new Date(data.list[i * 8].dt_txt);
    const options = { month: "long", day: "numeric" };
    const formattedDate = forecastDate.toLocaleDateString("en-US", options);
    document.querySelector(`#day${i + 1}`).textContent = formattedDate;

    // Display temperature
    document.querySelector(`#forecast${i + 1}`).innerHTML = `${data.list[
      i * 8
    ].main.temp.toFixed(0)}&deg;F`;

    //display weather description
    document.querySelector(`#weatherDescription${i + 1}`).innerHTML = `${data.list[i * 8].weather[0].description}`

    // Update weather icon
    const forecastIconsrc = `https://openweathermap.org/img/w/${
      data.list[i * 8].weather[0].icon
    }.png`;
    document
      .querySelector(`#forecast-weather-icon-${i + 1}`)
      .setAttribute("src", forecastIconsrc);
  }
}
