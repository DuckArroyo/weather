# Weather app

Requirements

GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the
city name,
the date,
an icon representation of weather conditions,
the temperature,
the humidity,
the wind speed,
and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a
5-day forecast that displays
the date,
an icon representation of weather conditions,
the temperature,
the wind speed,
and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city

## Weather app brief

At this time this application is incomplete, below are the details of the progress I have. I will continue to work on it this upcoming week with assistnace.

#HTML and CSS are in order.

The HTML is setup with buttons to accept user input.

#JavaScript
The event listeners work
The linking functions to the HTML work, meaning once created the items are inserted into the correct container.
The fetch functions are working; there are 3 hard coded functions and 2 with user entered items.
I am running into a problem analizing the data.

- I can draw the data from the API, and access it.
- First problem I am running into is getting through the layers of arrays, I can draw the fist layer but I cannot draw the second
- data.weather is the first layer.
- data.weather.[array] - the array where the weather is stored. I do not understand how to get the array infomration out without sending the informaiton out to a second function theough a for loop.
- Most of my time was spent on this and I have run out of time at this point.
- I have to work on the first group project.

- The hardcoded cities; Los Angeles, Chicago, Tokyo, were the original place holders for the search histoy buttons. never got to that point...

A separate but relevant issue, is the reset function.
I have written the function to reset the html inside the card I am creating and it technically works but not really.

Apologies on the terrible effort, quite a few thing stumped me in this project.
