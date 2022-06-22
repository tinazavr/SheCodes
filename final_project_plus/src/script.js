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

// CHANGE CITY, SUBMIT BUTTON
let changeCityForm = document.querySelector("#change-city-form");
changeCityForm.addEventListener("submit", changeCity);

function changeCity(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#city-input");
  let h1CityName = document.querySelector("h1");
  h1CityName.innerHTML = `${inputCity.value}`;
  //return inputCity.value;
}


//displaying default temparature value
let degrees = document.querySelector("#degrees");
let tempC = Math.round(weather[1].tempC);
degrees.innerHTML = tempC;

// DEGREES  FAHRENHEIT  to CELSIUS
let linkDegreesC = document.querySelector("#degrees-celsius");
linkDegreesC.addEventListener("click", changeDegreesToC);


function changeDegreesToC(event) {
  event.preventDefault();
  let degrees = document.querySelector("#degrees");
  let tempC = Math.round(weather[1].tempC);
  degrees.innerHTML = tempC;
}
// DEGREES  CELSIUS to FAHRENHEIT
let linkDegreesF = document.querySelector("#degrees-fahrenheit");
linkDegreesF.addEventListener("click", changeDegreesToF);

function changeDegreesToF(event) {
  event.preventDefault();
  let degrees = document.querySelector("#degrees");
  let tempC = weather[1].tempC;
  let tempF = degreesInF(tempC);
  degrees.innerHTML = tempF;
}
function degreesInF(tempC) {
  let tempF = Math.round(tempC * 1.8 + 32);
  return tempF;
}
