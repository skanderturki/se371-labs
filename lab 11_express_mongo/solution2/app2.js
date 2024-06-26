const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

// Import model
const ... = require("./model/...");

const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));

//////////////////////////////////////////////////////
/* Add general routes here (one route per web page) */
//////////////////////////////////////////////////////

app.get('/', (request, response) => {
  
})

/////////////////////////////
/*   Add API routes here   */
/////////////////////////////

app.post('/api/v1/....', (request, response) => {
  
});

app.get('/api/v1/...', (request, response) => {
  
})

app.put('/api/v1/...', (request, response) => {
  
})

app.delete('/api/v1/...', (request, response) => {
  
})

/* Handle unknown requests */
app.use((request, response) => {
  response.status(404).json({error: "404", msg: "Resource not found"});
});

/* Connect to mongodb server then start express web server */
mongoose.connect(process.env.MONGO_URI)
  .then((result) => {
    console.log(`Connection to database established...`);
    app.listen(process.env.port, () => {
      console.log(`Server listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error(`Could not connect to database:\n${error}`);
  });