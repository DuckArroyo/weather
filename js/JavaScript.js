var apiKey = 'af8d552e7c5f4110dc63b9ba4e35ef63';
var cityEl = document.querySelector('#submit-city');
var responseContainerEl = document.querySelector('#response-container');

var getWeather = function (event) {
  event.preventDefault();
  var userCity = document.querySelector('#city').value;
  var searchCityUrl =
    'https://api.openweathermap.org/data/2.5/forecast?q=' +
    userCity +
    '&units=imperial&appid=' +
    apiKey;
  //console.log(searchCityUrl);
  fetch(searchCityUrl) //currently the name of data is what I told the app that the curlies are named {} name can be used multiple times.
    .then((response) => response.json())
    .then((data) => {
      console.log(data); //this is where the data is actually in.
      if (data.cod == 200) {
        responseContainerEl.classList.toggle('hide');
        var card = document.createElement('div');
        card.setAttribute('id', 'weathercard');
        card.setAttribute('class', 'card');
        responseContainerEl.appendChild(card);
        // City name
        var cityName = data.city.name; //write variables for each item that need to be displayed
        var cityNameEl = document.createElement('h2');
        cityNameEl.textContent = cityName;
        card.appendChild(cityNameEl);
        //loop for data array

        for (var i = 0; i < data.list.length; i++) {
          if (data.list[i].dt_txt.indexOf('12:00:00') !== -1)
            makeCard(data.list[i]);
        }
      } else {
        alert(city + ' is not a valid city, please search for a valid city 😩');
      }
    });
};
//getWeather(); //not used becasue it is triggered by the event listener

var makeCard = function (weather) {
  console.log(weather);
  //console.log(weather.weather); console log for user searching city
  //!These dates need to be moved to make card function - here as proof of concept.
  var main = weather.weather[0].main;
  console.log(main);
  var descript = weather.weather[0].description;
  console.log(descript);
  var descripEl = document.createElement('p');
  descripEl.textContent = descript;
  weathercard.appendChild(descripEl);

  var day = moment(weather.dt_txt).format('dddd');
  var dayEl = document.createElement('p');
  dayEl.textContent = day;
  //card.appendChild(dayEl);
  var date = moment(weather.dt_txt).format('MMM Do YY');
  var dateEl = document.createElement('p');
  dateEl.textContent = date;
  //card.appendChild(dateEl);
  console.log(date);
  for (var i = 0; i <= weather.weather.length; i++) {
    console.log(weather.weather[i]);
    var ww = weather.weather.description;
    console.log(ww);
  }
};

var reset = function () {
  $(responseContainerEl).remove(card);
  responseContainerEl.innerHTML = '';
};

cityEl.addEventListener('click', getWeather);
