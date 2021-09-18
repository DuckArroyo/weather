//https://openweathermap.org/api
// 5 day weather docs https://openweathermap.org/forecast5
var apiKey = "af8d552e7c5f4110dc63b9ba4e35ef63";
var cityEl = document.querySelector("#city");
var zipCodeEl = document.querySelector("#zipCode");
var favoriteEl = document.querySelector("#favorite");

var responseContainerEl = document.querySelector("#response-container");

var getLosAngeles =
  "https://api.openweathermap.org/data/2.5/weather?q=los%20angeles&units=imperial&appid=af8d552e7c5f4110dc63b9ba4e35ef63";

var getChicago =
  "https://api.openweathermap.org/data/2.5/weather?q=chicago&units=imperial&appid=af8d552e7c5f4110dc63b9ba4e35ef63";

var getTokyoJP =
  "https://api.openweathermap.org/data/2.5/weather?q=tokyo&units=imperial&appid=af8d552e7c5f4110dc63b9ba4e35ef63";

var searchCityUrl =
  "api.openweathermap.org/data/2.5/forecast?q=" +
  cityEl +
  "&units=imperial&appid=" +
  apiKey;

var searchZipUrl =
  "api.openweathermap.org/data/2.5/forecast?zip=" +
  zipCodeEl +
  "&units=imperial&appid=" +
  apiKey;
//!may need the +s

function getLa() {
  fetch(getLosAngeles) //currently the name of data is what I told the app that the curlies are named {} name can be used multiple times.
    .then((response) => response.json())
    .then((data) => {
      console.log(data); //this is where the data is actually in.
      if (data.cod === 200) {
        // City name
        var cityName = data.name; //write variables for each item that need to be displayed
        var cityNameEl = document.createElement("h2");
        cityNameEl.textContent = cityName;
        responseContainerEl.appendChild(cityNameEl);
        //loop for data array
        console.log(data.name);
        //Temperature
        var temperature = data.main.temp; //write variables for each item that need to be displayed
        var temperatureEl = document.createElement("p");
        temperatureEl.textContent = temperature;
        responseContainerEl.appendChild(temperatureEl);
        //loop for data array
        console.log(data.main.temp);

        //! write the display functions within this function.

        // //! code the remove class hide element.remove.class("hide");
        // var cityTitleEl = document.querySelector("#card-title");
        // cityTitleEl.innerHTML = '<h5>' + city.name.text + '</h5>';

        // var temperatureEl =
      } else {
        alert("Error😩");
      }
    });
}

function getChi() {
  fetch(getChicago)
    .then((response) => response.json())
    .then((data) => {
      console.log(data); //this is where the data is actually in.
      if (data.cod === "200") {
        var cityName = data.city.name; //write variables for each item that need to be displayed
        var cityNameEl = document.createElement("h2");
        cityNameEl.textContent = cityName;
        responseContainerEl.appendChild(cityNameEl);

        //loop for data array
        console.log(data.city.name);

        //! write the display functions within this function.

        // //! code the remove class hide element.remove.class("hide");
        // var cityTitleEl = document.querySelector("#card-title");
        // cityTitleEl.innerHTML = '<h5>' + city.name.text + '</h5>';

        // var temperatureEl =
      } else {
        alert(city + " is not a valid city, please search for a valid city 😩");
      }
    });
}

function getTokyo() {
  fetch(getTokyoJP)
    .then((response) => response.json())
    .then((data) => {
      console.log(data); //this is where the data is actually in.
      if (data.cod === "200") {
        var cityName = data.city.name; //write variables for each item that need to be displayed
        var cityNameEl = document.createElement("h2");
        cityNameEl.textContent = cityName;
        responseContainerEl.appendChild(cityNameEl);

        //loop for data array
        console.log(data.city.name);

        //! write the display functions within this function.

        // //! code the remove class hide element.remove.class("hide");
        // var cityTitleEl = document.querySelector("#card-title");
        // cityTitleEl.innerHTML = '<h5>' + city.name.text + '</h5>';

        // var temperatureEl =
      } else {
        alert(city + " is not a valid city, please search for a valid city 😩");
      }
    });
}

//!call 5 day By city
var getWeather = function () {
  fetch(searchCityUrl) //currently the name of data is what I told the app that the curlies are named {} name can be used multiple times.
    .then((response) => response.json())
    .then((data) => {
      console.log(data); //this is where the data is actually in.
      if (data.cod === 200) {
        // City name
        var cityName = data.name.city; //write variables for each item that need to be displayed
        var cityNameEl = document.createElement("h2");
        cityNameEl.textContent = cityName;
        responseContainerEl.appendChild(cityNameEl);
        //loop for data array
        console.log(data.name.city);
        //Temperature
      } else {
        alert(city + " is not a valid city, please search for a valid city 😩");
      }
    });
};
getWeather();

//! call by zip code
// var getByZip = function () {
//   fetch(searchZipUrl)

// };
// getByZip();

var reset = function () {};

// var printWeather = function () {
//   console.log("printWeather triggered");
//   //! addClass(".hide"); // class to hide element
// };
//printWeather();
