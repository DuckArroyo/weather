//https://openweathermap.org/api
// 5 day weather docs https://openweathermap.org/forecast5
var apiKey = "af8d552e7c5f4110dc63b9ba4e35ef63";
var cityEl = document.querySelector("#city");
var stateEl = document.querySelector("#state");
var zipCodeEl = document.querySelector("#zipCode");

var searchCityUrl =
  "https://api.openweathermap.org/data/2.5/forecast?q=Portland&appid=af8d552e7c5f4110dc63b9ba4e35ef63";
//replace "api.openweathermap.org/data/2.5/forecast?q="cityEl"&appid="+apiKey;

var searchZipUrl =
  "https://api.openweathermap.org/data/2.5/forecast?zip=97403&appid=af8d552e7c5f4110dc63b9ba4e35ef63";
//replace with these "api.openweathermap.org/data/2.5/forecast?zip="zipCodeEl"&appid="+apiKey

//!City
//"api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + apiKey
//!Zip works
//"api.openweathermap.org/data/2.5/forecast?zip=" + zipCodeEl + "&appid=" + apiKey

//userFormEl.addEventListener("click", getWeather);

//id=submit-city
//id=submit-state
//id=submit-zip

function getLa() {
  fetch("https://api.openweathermap.org/data/2.5/forecast?q=los%20angeles&appid=af8d552e7c5f4110dc63b9ba4e35ef63")
.then(response.json(response));
.then(console.log(data));
if(response.cod === 200) {
  console.log(city.name.text);
  //! code the remove class hide element.remove.class("hide");
  var cityTitleEl = document.querySelector("#card-title");
  cityTitleEl.innerHTML = '<h5>' + city.name.text + '</h5>';

  var temperatureEl = 
} 
else {alert(city + " is not a valid city, please search for a valid city 😩");}

}

function getChi() {
fetch("https://api.openweathermap.org/data/2.5/forecast?q=chicago&appid=af8d552e7c5f4110dc63b9ba4e35ef63");

}

function get Tokyo(){
fetch("https://api.openweathermap.org/data/2.5/forecast?q=tokyo&appid=af8d552e7c5f4110dc63b9ba4e35ef63");

}

//call 5 day By city
var getWeather = function () {
  fetch(searchCityUrl).then(function (response) {
    if (response.ok) {
      response.json(function (data) {
        console.log(response, data);
        printWeather(data, city);
      });
    } else {
      alert(city + " is not a valid city, please search for a valid city 😩");
    }
  });
};
getWeather();

// call by zip code
var getByZip = function () {
  fetch(searchZipUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
var responseContainerEl = document.querySelector("#response-container");
responseContainerEl.appendChild()
      printWeather(city);
    });

  // if (response) {
  //   console.log(data);
  //   printWeather();
  // } else {
  //   alert(
  //     zipCode + " is not a valid zip code, please search for a valid city 😩"
  //   );
  // }
};
getByZip();

var printWeather = function () {
  console.log("printWeather triggered");
  //! addClass(".hide"); // class to hide element
};
//printWeather();