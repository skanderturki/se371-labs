const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const Company = require("./model/company");
const authenticationRouter = require('./router/authenticationRouter');
const companiesRouter = require('./router/companiesRouter');

require('dotenv').config();

// create session store
let sessionStore = new MongoDBStore({
  uri: process.env.MONGO_URI,
  collection: 'mySessions'
});
// Catch errors
sessionStore.on('error', function (error) {
  console.log(error);
});


const app = express();
app.use(express.static('public'));

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


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

///////////////////////////////////////////////////
////////////////////   ROUTES    //////////////////
///////////////////////////////////////////////////

app.use('/companies', companiesRouter);
app.use('/auth', authenticationRouter);


// HOMEPAGE
app.get('/', (request, response) => {
  response.render('index');
})




///////////////////////////////////////////////////
mongoose.connect(process.env.MONGO_URI)
  .then(result => {
    console.log(`Successfully connected to database server..`);
    app.listen(process.env.PORT, () => {
      console.log(`Web server running at http://localhost:${process.env.PORT}`);
    });
  })
  .catch(error => {
    console.log(error);
  })