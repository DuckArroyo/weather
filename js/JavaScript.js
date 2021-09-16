//https://openweathermap.org/api
// 5 day weather docs https://openweathermap.org/forecast5
var apiKey = "af8d552e7c5f4110dc63b9ba4e35ef63";
var cityEl = document.querySelector("#city");
var stateEl = document.querySelector("#state");
var zipCodeEl = document.querySelector("#zipCode");
    
var searchCityUrl = "api.openweathermap.org/data/2.5/forecast?q=Eugene,OR&appid="+apiKey;
var searchZipUrl = "api.openweathermap.org/data/2.5/forecast?zip=zipCodeEl,us&appid=" + apiKey

userFormEl.addEventListener("click", getWeather);

//id=submit-city
//id=submit-state
//id=submit-zip

//call 5 day By city
var getWeather = function () {
  
  fetch(searchCityUrl)
  .then(response => response.json())
  .then(data => {
    // do stuff with the data;
  });
  .catch(() => {
    msg.textContent = "Please search for a valid city 😩";
};
console.log(getWeather);

// call by zip code
var getByZip = function () {
  fetch(searchZipUrl);
  .then(response => response.json())
  .then(data => {
    // do stuff with the data;
  });
  .catch(() => {
    msg.textContent = "Please search for a valid city 😩";
};
console.log(getByZip);

//! addClass(".hide"); // class to hide elements


//! Available parameters
// *lat, lon	required	Geographical coordinates (latitude, longitude)
// *appid	required	Your unique API key (you can always find it on your account page under the "API key" tab)
// *exclude	optional	By using this parameter you can exclude some parts of the weather data from the API response. It should be a comma-delimited list (without spaces).
// Available values:
//     current
//     minutely
//     hourly
//     daily
//     alerts
// units optional Units of measurement. standard, metric and imperial units are available. If you do not use the units parameter, standard units will be applied by default. Learn more
// lang optional You can use the lang parameter to get the output in your language. Learn more