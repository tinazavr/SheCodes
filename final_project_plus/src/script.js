// let cityName = prompt("Enter a city:");
let weather = [
  {
    name: "Pasadena",
    temp: 26.4,
    humidity: 65,
    wind: 22,
  },

  {
    name: "Kyiv",
    temp: 22.75,
    humidity: 51,
    wind: 10,
  },

  {
    name: "Polohy",
    temp: 16.34,
    humidity: 30,
    wind: 9,
  },
  {
    name: "Zaporizhzhya",
    temp: 12.45,
    humidity: 45,
    wind: 6,
  },

  {
    name: "Lviv",
    temp: 12.5,
    humidity: 34,
    wind: 12,
  },
  {
    name: "Dniprorudne",
    temp: 29,
    humidity: 76,
    wind: 8,
  },
];

function askCity() {
  let cityName = prompt("Enter a city:");
  checkCityName(cityName);
}
askCity();

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
    if (cityName === weather[i].name) {
      let userCity = weather[i];
      //  console.log(userCity);
      roundedTemp(userCity);
      return;
    }
  }
  showLink(cityName);
}

function roundedTemp(userCity) {
  let temperatureC = Math.round(userCity.temp);
  let temperatureF = Math.round(userCity.temp * 1.8 + 32);
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
