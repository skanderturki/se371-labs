const express = require('express');
require('dotenv').config();

// Import data object
const chairs = require('./data.js');

// express app creation
const app = express();

// Add the public folder as a static files folder (so that files are accessible to client requests)
app.use(express.static('public')); 

// register view engine to express app
app.set('view engine', 'ejs');

// Add routes handlers below
app.get('/', (request, response) => {
  console.log(chairs);
  response.render('index', {chairs: chairs});
})



// Finally if no route corresponds to request render 404 page
app.use((request, response) => {
  response.render('404');
});


// listen for requests
app.listen(process.env.PORT, () => { 
  console.log(`Listening on port ${process.env.PORT}...`) 
});
