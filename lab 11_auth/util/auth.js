
function isAuth(request, response, next) {
  if(request.session.isAuth){
    next();
  } else {
    request.session.error = "You have to Login first";
    response.redirect("/auth/login");
  }
}

const isLogged = (request, response, next) => {
  if (request.session.isAuth) {
    response.redirect("/companies");
  } else {
    next();
  }
};

module.exports = {isAuth, isLogged};