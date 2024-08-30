const express = require('express');
require('dotenv').config();
const chairs = require('./data.js');

//console.log(process.env.PORT);

// Import data object

// express app creation
const app = express();

// Add the public folder as a static files folder (so that files are accessible to client requests)
app.use(express.static("public")); 

// register view engine to express app
app.set("view engine", "ejs");

// Add routes handlers below
app.get("/", (request, response)=>{
  response.render("index", {chairs: chairs});
});

app.get("/about", (request, response)=>{
  response.render("about");
});

// Final9ly if no route corresponds to request render 404 page
app.use((request, response)=>{
  response.render("404");
});


// listen for requests
app.listen(process.env.PORT, () => { 
  console.log(`Listening on port ${process.env.PORT}...`) 
});
