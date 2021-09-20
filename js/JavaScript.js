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

var makeCard = function (weather) {
  // var dayCard = document.createElement("div");
  // dayCard.setAttribute("id", "inside-card");
  // dayCard.setAttribute("class", "card");
  // card.appendChild(dayCard);

  //console.log(weather);
  console.log(weather.weather);

  //day of the week
  var day = moment(weather.dt_txt).format("dddd");
  var dayEl = document.createElement("p");
  dayEl.textContent = day;
  //dayCard.appendChild(dayEl);
  //console.log(dayEl);
  //date
  var date = moment(weather.dt_txt).format("MMM Do YY");
  var dateEl = document.createElement("p");
  dateEl.textContent = date;
  //dayCard.appendChild(dateEl);
  //console.log(dateEl);

  for (var i = 0; i <= descrip.length; i++) {
    description = descrip[0];
    console.log(description);

    icon = descrip[1];
    console.log(icon);
  }
  //within the loop
  //create a div for each day
  //take dt and moment it into day of the week and date
  //temperature
  //description
  //icon
  //append all into the div
};
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

  console.log(searchZipUrl);
};
// getByZip();//not used because it is triggered by the event listener

//!these work but the reset function needs to be edited
function getLa() {
  fetch(getLosAngeles)
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
      } else {
        alert("Error 😩");
      }
    });
}

//!reset function
$();
var reset = function () {
  //$(responseContainerEl).remove(card);
  responseContainerEl.innerHTML = "";
  //id="response-container" class="card-body card hide"
};

cityEl.addEventListener("click", getWeather);

zipCodeEl.addEventListener("click", getByZip);
