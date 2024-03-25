const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);


var bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

let sessionStore = new MongoDBStore({
	uri: process.env.MONGO_SESSIONS_URI,
	collection: 'mySessions'
});

// configure session middleware
app.use(session({
	secret: process.env.SESSION_SECRET,
	cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
  },
	saveUninitialized: true,
	resave: true,
	store: sessionStore
}));

// Catch errors
sessionStore.on('error', function(error) {
  console.log(error);
});

const { Chair, typesMap } = require("./models/Chair");

// Folder containing static resources (css, img, etc...)
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));

// Set up the template engine
app.set("view engine", "ejs");

// Homepage
app.get('/', (request, response) => {
  Chair.find()
    .then((result) => {
      response.render('index', {chairs: result, err: null});
    })
    .catch( (err) => {
      response.render('index', {chairs: null, err: "Could not load data...."});
    });
});

// Homepage
app.post('/', (request, response) => {
  const type = request.body.chair_type;
  let criteria = {};
  if(type) {
    const type_label = typesMap.get(type);
    if(type_label) {
      criteria = {type: type_label};
    }
  }
  Chair.find(criteria)
    .then((result) => {
      response.render('index', {chairs: result, err: null});
    })
    .catch( (err) => {
      response.render('index', {chairs: null, err: "Could not load data...."});
    });
});

// about
app.get('/about', (request, response) => {
  response.render('about');
});

/////////// CART ROUTES /////////////////

app.post('/cart/v1/:id/', (request, response) => {
  try {
    const id = request.params.id;
    if(request.session.cart) {
      request.session.cart.push(id);
    } else {
      request.session.cart = [id];
    }
    return response.json({added: true, cart: request.session.cart});
  } catch (e) {
    console.log(e);
    return response.json({added: false, cart: null});
  }
});

// Handle any unrecognized routes
app.use((request, response) => {
  response.status(404).render('404');
});

mongoose.connect(process.env.MONGO_URI)
  .then((result)=>{
    console.log(`Connected to the database...`);
    app.listen(process.env.PORT, () => {
      console.log(`Server started on port ${process.env.PORT}`);
    });
  })
  .catch((err)=>{
    console.log(err);
  });
