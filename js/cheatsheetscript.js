//Option 1 user types city or zip code
//query goes
//fetch gets result
//then gets data and json's
//

//option 2 user types "favorites"
//java creates a button that is stored into local storage for persistence
//on click
// button clears display
//fetch is created for "favorite" click

//button to clear favorites and current display

//create 3 default buttons for hard coded

function myFunction() {
  fetch(
    // Make a fetch request to Wikipedia to get a random article title
    "https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnnamespace=0&rnlimit=1&origin=*"
    //
  )
    .then(function (wikiResponse) {
      return wikiResponse.json();
    })
    .then(function (wikiResponse) {
      console.log(wikiResponse.query.random[0].title);
      var title = wikiResponse.query.random[0].title;
      var h2 = document.createElement("h2");
      h2.textContent = title;
      document.querySelector("#response-header").innerHTML = h2;
      var rating = document.getElementById("rating").value;

      // Create a variable to hold the title of the Wikipedia article
      // YOUR CODE HERE
      var wikiResponse;
      // Display the article title above the GIF as a <h2> heading
      // YOUR CODE HERE
      var apiKey = "BqXxPpU3eHGrOkjABhxFg4oM1ZEf0oK1";
      return fetch(
        "https://api.giphy.com/v1/gifs/search?q=" +
          wikiResponse +
          "&rating=" +
          rating +
          "&api_key=" +
          apiKey
      );
      //
      var rating = document.getElementById("rating").value;
      // Return a fetch request to the Giphy search API with the article title and rating parameters
      // YOUR CODE HERE
      //
      // Remember to add your API key at the end
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      if (response.data.length === 0) {
        console.log("Giphy could not find anything for that.");
      } else {
        console.log(response.data[0]);
        var responseContainerEl = document.querySelector("#response-container");
        responseContainerEl.innerHTML = "";
        var gifImg = document.createElement("img");
        gifImg.setAttribute("src", response.data[0].images.fixed_height.url);
        responseContainerEl.appendChild(gifImg);
      }
    });
}
