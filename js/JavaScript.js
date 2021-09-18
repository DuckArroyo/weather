//https://openweathermap.org/api
// 5 day weather docs https://openweathermap.org/forecast5
var apiKey = "af8d552e7c5f4110dc63b9ba4e35ef63";
var cityEl = document.querySelector("#submit-city");
var zipCodeEl = document.querySelector("#submit-zip");
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
//cityEl.addEventListener("submit-city", function () {
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

        //! replicate the loop from LA in here for the 5 day forecast/create
        //within the loop
        //create a div for each day
        //take dt and moment it into day of the week and date
        //temperature
        //description
        //icon
        //append all into the div
      } else {
        alert(city + " is not a valid city, please search for a valid city 😩");
      }
    });
};
//});
//getWeather(); //not used becasue it is triggered by the event listener

//! call by zip code - waiting on the code from city to adapt
var getByZip = function () {
  fetch(searchZipUrl);
  console
    .log("triggered")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};
// getByZip();//not used becasue it is triggered by the event listener

//!these work but the reset function needs to be edited
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
        //!HELP - for loop or find function?
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

//!reset function
var reset = function () {
  responseContainerEl.textContent = "";
};

cityEl.addEventListener("#submit-city", getWeather);

zipCodeEl.addEventListener("#submit-zip", getByZip);
