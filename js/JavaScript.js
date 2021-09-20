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

//!call 5 day By city
var getWeather = function (event) {
  event.preventDefault();
  var userCity = document.querySelector("#city").value;
  var searchCityUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    userCity +
    "&units=imperial&appid=" +
    apiKey;
  //console.log(searchCityUrl);
  fetch(searchCityUrl) //currently the name of data is what I told the app that the curlies are named {} name can be used multiple times.
    .then((response) => response.json())
    .then((data) => {
      console.log(data); //this is where the data is actually in.
      if (data.cod == 200) {
        responseContainerEl.classList.toggle("hide");
        var card = document.createElement("div");
        card.setAttribute("id", "weather-card");
        card.setAttribute("class", "card");
        responseContainerEl.appendChild(card);
        // City name
        var cityName = data.city.name; //write variables for each item that need to be displayed
        var cityNameEl = document.createElement("h2");
        cityNameEl.textContent = cityName;
        card.appendChild(cityNameEl);
        //loop for data array

        for (var i = 0; i < 5; i++) {
          makeCard(data.list[i]);
        }
      } else {
        alert(city + " is not a valid city, please search for a valid city 😩");
      }
    });
};

//getWeather(); //not used becasue it is triggered by the event listener

//! call by zip code - waiting on the code from city to adapt
var getByZip = function (event) {
  event.preventDefault();
  var userZip = document.querySelector("#zipCode").value;
  console.log(userZip);
  var searchZipUrl =
    "https://api.openweathermap.org/data/2.5/forecast?zip=" +
    userZip +
    "&units=imperial&appid=" +
    apiKey;
  fetch(searchZipUrl) //currently the name of data is what I told the app that the curlies are named {} name can be used multiple times.
    .then((response) => response.json())
    .then((data) => {
      console.log(data); //this is where the data is actually in.
      if (data.cod == 200) {
        console.log("Success");
      } else {
        alert(
          userZip +
            " is not a valid zip code, please search for a valid city 😩"
        );
      }
    });

  //loop for data array
  // for (var i = 0; i < 5; i++) {
  //   makeCard(data.list[i]);
  // }
};
// getByZip();//not used because it is triggered by the event listener

//!these work but the reset function needs to be edited
function getLa() {
  fetch(getLosAngeles) //currently the name of data is what I told the app that the curlies are named {} name can be used multiple times.
    .then((response) => response.json())
    .then((data) => {
      console.log(data); //this is where the data is actually in.
      if (data.cod === 200) {
        reset();
        responseContainerEl.classList.toggle("hide");
        var card = document.createElement("div");
        card.setAttribute("id", "weather-card");
        card.setAttribute("class", "card");
        responseContainerEl.appendChild(card);
        // City name
        var cityName = data.name; //write variables for each item that need to be displayed
        var cityNameEl = document.createElement("h2");
        cityNameEl.textContent = cityName;
        card.appendChild(cityNameEl);
        //loop for data array
        console.log(data.name);
        //Temperature
        var temperature = data.main.temp; //write variables for each item that need to be displayed
        var temperatureEl = document.createElement("p");
        temperatureEl.textContent = temperature;
        card.appendChild(temperatureEl);
        console.log(data.main.temp);

        for (var i = 0; i < 5; i++) {
          makeCard(data.weather[i]);
        }
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
  fetch(getChicago)
    .then((response) => response.json())
    .then((data) => {
      console.log(data); //this is where the data is actually in.
      if (data.cod === 200) {
        reset();
        responseContainerEl.classList.toggle("hide");
        var card = document.createElement("div");
        card.setAttribute("id", "weather-card");
        card.setAttribute("class", "card");
        responseContainerEl.appendChild(card);
        // City name
        var cityName = data.name; //write variables for each item that need to be displayed
        var cityNameEl = document.createElement("h2");
        cityNameEl.textContent = cityName;
        card.appendChild(cityNameEl);
        //loop for data array
        console.log(data.name);
        //Temperature
        var temperature = data.main.temp; //write variables for each item that need to be displayed
        var temperatureEl = document.createElement("p");
        temperatureEl.textContent = temperature;
        card.appendChild(temperatureEl);
        console.log(data.main.temp);

        for (var i = 0; i < 5; i++) {
          makeCard(data.weather[i]);
        }
      } else {
        alert("Error 😩");
      }
    });
}

function getTokyo() {
  fetch(getTokyoJP)
    .then((response) => response.json())
    .then((data) => {
      console.log(data); //this is where the data is actually in.
      if (data.cod === 200) {
        reset();
        responseContainerEl.classList.toggle("hide");
        var card = document.createElement("div");
        card.setAttribute("id", "weather-card");
        card.setAttribute("class", "card");
        responseContainerEl.appendChild(card);
        // City name
        var cityName = data.name; //write variables for each item that need to be displayed
        var cityNameEl = document.createElement("h2");
        cityNameEl.textContent = cityName;
        card.appendChild(cityNameEl);
        //loop for data array
        console.log(data.name);
        //Temperature
        var temperature = data.main.temp; //write variables for each item that need to be displayed
        var temperatureEl = document.createElement("p");
        temperatureEl.textContent = temperature;
        card.appendChild(temperatureEl);
        console.log(data.main.temp);

        for (var i = 0; i < 5; i++) {
          makeCard(data.list[i]);
        }
      } else {
        alert("Error 😩");
      }
    });
}

var makeCard = function (weather) {
  console.log(weather);
  //console.log(weather.weather); console log for user searching city
  //!These dates need to be moved to make card function - here as proof of concept.
  var day = moment(weather.dt_txt).format("dddd");
  var dayEl = document.createElement("p");
  dayEl.textContent = day;
  //card.appendChild(dayEl);
  var date = moment(weather.dt_txt).format("MMM Do YY");
  var dateEl = document.createElement("p");
  dateEl.textContent = date;
  //card.appendChild(dateEl);
  console.log(date);
  // for (var i = 0; i <= weather.weather.length; i++) {
  //   console.log(weather.weather[i]);
  //   var ww = weather.weather.description;
  //   console.log(ww);
  // }

  //Create inner card and append items to the card

  //!create a variable to hold teh array. Then create a second variable with the index item. See 3w and GitItDone
  //within the loop
  //create a div for each day
  //take dt and moment it into day of the week and date
  //temperature
  //description
  //icon
  //append all into the div
};

var reset = function () {
  //$(responseContainerEl).remove(card);
  responseContainerEl.innerHTML = "";
  //id="response-container" class="card-body card hide"
};

cityEl.addEventListener("click", getWeather);

zipCodeEl.addEventListener("click", getByZip);
