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

//!call 5 day By city
cityEl.addEventListener("submit-city", function () {
  //I believe this can be rewritten as getWeather() {
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
          alert(
            city + " is not a valid city, please search for a valid city 😩"
          );
        }
      });
  };
});
//getWeather();

//! call by zip code
// var getByZip = function () {
//   fetch(searchZipUrl)

// };
// getByZip();

function getLa() {
  reset();
  fetch(getLosAngeles) //currently the name of data is what I told the app that the curlies are named {} name can be used multiple times.
    .then((response) => response.json())
    .then((data) => {
      console.log(data); //this is where the data is actually in.
      if (data.cod === 200) {
        // remove hide
        responseContainerEl.classList.toggle("hide");
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
        console.log(data.main.temp);
        //find
        // find(weather, [0], description) return description
        // console.log(description);
        //for loop to collect "Weather"
        //   var main = for (i = 0; i < weather.length; i++) {
        //   //description
        //   var weather = data.weather.description; //write variables for each item that need to be displayed
        //   var weatherEl = document.createElement("p");
        //   weatherEl.textContent = weather;
        //   responseContainerEl.appendChild(weatherEl);
        //   console.log(data.weather.description);
        //   //icon
        //   var icon = data.weather.icon;
        //   var iconEl = document.createElement("div");
        //   iconEl.img = icon;
        //   responseContainerEl.appendChild(iconEl);
        //   console.log(data.weather.icon);
        // }
      } else {
        alert("Error😩");
      }
    });
}

function getChi() {
  reset();
  fetch(getChicago)
    .then((response) => response.json())
    .then((data) => {
      console.log(data); //this is where the data is actually in.
      if (data.cod === 200) {
        responseContainerEl.classList.toggle("hide");
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
        console.log(data.main.temp);
      } else {
        alert("Error 😩");
      }
    });
}

function getTokyo() {
  reset();
  fetch(getTokyoJP)
    .then((response) => response.json())
    .then((data) => {
      console.log(data); //this is where the data is actually in.
      if (data.cod === 200) {
        responseContainerEl.classList.toggle("hide");
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
        console.log(data.main.temp);
      } else {
        alert("Error 😩");
      }
    });
}

var reset = function () {
  responseContainerEl.textContent = "";
};

// var printWeather = function () {
//   console.log("printWeather triggered");
//   //! addClass(".hide"); // class to hide element
// };
//printWeather();
