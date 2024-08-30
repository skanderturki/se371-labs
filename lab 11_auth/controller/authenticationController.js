const User = require('../model/user');
const bcrypt = require('bcrypt');

function registrationPage(request, response) {
  return response.render('register');
}

async function register(request, response) {
  const { email, name, password } = request.body;

  let user = await User.findOne({email});
  if(user) {
    request.session.error = "User already registered";
    return response.redirect("/auth/register");
  }
  const hashed = await bcrypt.hash(password, 12);

  user = new User({ email, name, password: hashed });
  console.log(`Registered ${user}`);
  await user.save();
  response.redirect("/auth/login");
}


function loginPage(request, response) {
  return response.render('login');
}

async function login(request, response) {
  const { email, password } = request.body;

  let user = await User.findOne({email});
  if(!user) {
    request.session.error = "Invalid credentials";
    return response.redirect("/auth/login");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  console.log(`Logged in ${isMatch}`)
  if( !isMatch ) {
    request.session.error = "Invalid credentials";
    return response.redirect("/auth/login"); 
  }

  request.session.isAuth = true;
  request.session.username = user.name;
  response.redirect('/companies');
}

function logout(request, response) {
  request.session.isAuth = false;
  response.redirect('/');
}

module.exports = { register, registrationPage, login, loginPage, logout }