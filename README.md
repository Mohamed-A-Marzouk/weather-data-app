# Weather-Journal App Project

# project technologies
node express

# Project Dependencies
cors body-parser

# Integration
Integrating OpenWeatherMap API

# server side code 
our server api that implemented in server.js
has 2 routes one for posting data to the server end point that is a js object projectData

GET route setup on the server side with the first argument '/all',
and the second argument a callback function to return the JS object created at the top of server code.

POST rout setup on the server side with the first argument ''/addData'
and the second argument a callback function to set data to the JS object created at the top of server code.


# client side code
our app.js file we started with apiKey constant that we will use when calling the weather api 

when clicking on generate button it call function handelGenerateBtnClick that get zip code 
and user input and setup apiUrl  then call getData function to fetch data from api 

after that call postData function to set data on the server after that calling updateUI that starting 
with fetching '/all' to get data from our local server to use the returned data to update ui 





