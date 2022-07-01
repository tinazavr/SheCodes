let weather = [
  //temperature in Celsius
  {
    name: "Pasadena",
    tempC: 26.4,
    humidity: 65,
    wind: 22,
  },

  {
    name: "Kyiv",
    tempC: 22.75,
    humidity: 51,
    wind: 10,
  },

  {
    name: "Polohy",
    tempC: 16.34,
    humidity: 30,
    wind: 9,
  },
  {
    name: "Zaporizhzhya",
    tempC: 12.45,
    humidity: 45,
    wind: 6,
  },

  {
    name: "Lviv",
    tempC: 12.5,
    humidity: 34,
    wind: 12,
  },
  {
    name: "Dniprorudne",
    tempC: 29,
    humidity: 76,
    wind: 8,
  },
];

/*
function askCity() {
  let cityName = prompt(`Enter a city: (It is can be only one of this cities: ${showCities(weather)}`);
  checkCityName(cityName);
}
askCity();

function showCities(weather){
    let listOfCities =  weather.map((city) => city.name).join(', ');
    return listOfCities;
}


function checkCityName(cityName) {
  if (cityName.length >= 2 && isNaN(cityName)) {
    findIn(cityName);
  } else if (cityName === null || cityName === " ") {
    alert("Please, enter name of a city.");
    askCity();
  } else {
    alert("Sorry ☹️ something went wrong enter the city name again.");
    askCity();
  }
}


function findIn(cityName) {
  for (let i = 0; i < weather.length; i++) {
    if (cityName.toLowerCase() === weather[i].name.toLowerCase()) {
      let userCity = weather[i];
      roundedTemp(userCity);
      return;
    }
  }
  showLink(cityName);
}

function roundedTemp(userCity) {
  let temperatureC = Math.round(userCity.tempC);
  let temperatureF = Math.round(userCity.tempC * 1.8 + 32);
  showWeather(userCity, temperatureC, temperatureF);
}

function showWeather(userCity, temperatureC, temperatureF) {
  alert(
    `It is currently ${temperatureC}°C (${temperatureF}°F) in ${userCity.name} with a humidity of ${userCity.humidity}% and a wind ${userCity.wind} km/h.`
  );
}

function showLink(cityName) {
  alert(
    `Sorry, we don't know the weather for ${cityName} city, try going to https://www.google.com/search?q=weather+${cityName}.`
  );
}

*/
//DISPLAYING CURRENT DATE AND TIME
let currentData = document.querySelector("h2");
currentData.innerHTML = getDate();

function getDate() {
  let currentDay = new Date();

  let dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = dayOfWeek[currentDay.getDay()];

  let monthArray = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sept.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];
  let month = monthArray[currentDay.getMonth()];

  let date = currentDay.getDate();
  //let year = currentDay.getFullYear();
  let hours = currentDay.getHours();
  if (hours <= 9) {
    hours = "0" + hours;
  }
  let minutes = currentDay.getMinutes();
  if (minutes <= 9) {
    minutes = "0" + minutes;
  }
  let today = `${month} ${date}, ${day}, ${hours}:${minutes}`;
  return today;
}

const defaultCityName = "Dniprorudne";
//displaying default temparature value
defaultCity();
function defaultCity() {
  let defaultCityElement = document.querySelector("h1");
  defaultCityElement.innerHTML = defaultCityName;
  getWeatherC(defaultCityName);
  getParameters(defaultCityName);
}

//Cities in nav menu
/*let citiesArr = [Dniprorudne, Mariupol, Lviv];
let navCity1 = document.querySelector("#nav-city-1");
navCity1.innerHTML = `${citiesArr[0]}`;

let navCity1 = document.querySelector("#nav - city - 1;");
navCity1.addEventListener('click', navCity);
function navCity(navCity1){
   getWeatherC(navCity1);
   getParameters(navCity1);
}
*/

let currentCity = document.querySelector("#current-location-button");
currentCity.addEventListener("click", currentCityWeather);

function currentCityWeather(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getPosition);
}

function getPosition(position) {
  let longitude = position.coords.longitude;
  let latitude = position.coords.latitude;
  let units = "metric";
  let apiKey = "80837f7b81708cf27e6991c6119a6e84";

  let currentCityUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(currentCityUrl).then(currentWeather);
}
function currentWeather(response, units) {
  let nameCurrentCity = document.querySelector("h1");
  let cityName = response.data.name;
  let inputCity = document.querySelector("#city-input");

  nameCurrentCity.innerHTML = cityName;
  inputCity.value = cityName;
  setWeather(cityName, units);
  getParameters(cityName);
}

// CHANGE CITY, SUBMIT BUTTON
let changeCityForm = document.querySelector("#change-city-form");
changeCityForm.addEventListener("submit", changeCity);

function changeCity(event, units) {
  event.preventDefault();
  let inputCity = document.querySelector("#city-input");
  let cityName = inputCity.value;
  setWeather(cityName, units);
}

function setWeather(cityName, units) {
  let h1CityName = document.querySelector("h1");
  if (cityName === "") {
    cityName = defaultCityName;
  }
  h1CityName.innerHTML = cityName;

  if (units === "F") {
    getWeatherF(cityName);
  } else {
    getWeatherC(cityName);
  }
}


function getParameters(cityName) {
  let apiKey = "80837f7b81708cf27e6991c6119a6e84";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayParameters);
}

function displayParameters(response) {
  // let precipitationH5 = document.querySelector("#precipitation");
  let windH5 = document.querySelector("#wind");
  let humidityH5 = document.querySelector("#humidity");
  let feelsLikeH5 = document.querySelector("#feels-like");
  let descriptionH5 = document.querySelector("#description");
  // let precipitation = Math.round(response.data.main);
  let wind = Math.round(response.data.wind.speed);
  let feelsLike = Math.round(response.data.main.feels_like);
  let humidity = Math.round(response.data.main.humidity);
  let description = response.data.weather[0].description;

  // precipitationH5.innerHTML = `Precipitation: ${precipitation}%`;
  feelsLikeH5.innerHTML = `Feels like: ${feelsLike}&#8451;`;
  windH5.innerHTML = `Wind: ${wind} km/h`;
  humidityH5.innerHTML = `Humidity: ${humidity}%`;
  descriptionH5.innerHTML = `${description}`;
}

//GET AND SHOW WEATHER in C
function getWeatherC(cityName) {
  let apiKey = "80837f7b81708cf27e6991c6119a6e84";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

//GET WEATHER in F
function getWeatherF(cityName) {
  let apiKey = "80837f7b81708cf27e6991c6119a6e84";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeather);
}

//SHOW WEATHER
function displayWeather(response) {
  let degrees = document.querySelector("#degrees");
  let temperature = Math.round(response.data.main.temp);
  degrees.innerHTML = temperature;
}

// DEGREES  FAHRENHEIT  to CELSIUS
let linkDegreesC = document.querySelector("#degrees-celsius");
linkDegreesC.addEventListener("click", changeCityForC);

function changeCityForC(event) {
  //  let linkDegreesC = document.querySelector("#degrees-fahrenheit");
  changeCity(event, "C");
}

// DEGREES  CELSIUS to FAHRENHEIT
let linkDegreesF = document.querySelector("#degrees-fahrenheit");
linkDegreesF.addEventListener("click", changeCityForF);

function changeCityForF(event) {
  // let linkDegreesF = document.querySelector("#degrees-fahrenheit");
  changeCity(event, "F");
}
