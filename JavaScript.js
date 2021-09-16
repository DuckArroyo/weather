//!https://openweathermap.org/api
//One call API https://openweathermap.org/api/one-call-api
// 5 day weather docs https://openweathermap.org/forecast5

var apiKey = "af8d552e7c5f4110dc63b9ba4e35ef63";

//Api call https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

//call 5 day By city
var getWeather = function () {
  fetch(
    "api.openweathermap.org/data/2.5/forecast?q=Eugene,OR&appid=" + apiKey
  ).then(function (lat) {
    return lat.json();
  });
};
console.log(getWeather);

var getMoreWeather = function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/onecall?lat=44.068404274656245&lon=-123.03870966434789&appid=" +
      apiKey
  );
  console.log(fetch);
};

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
