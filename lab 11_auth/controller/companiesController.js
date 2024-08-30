const Company = require("../model/company");



function add(request, response) {
  const company = new Company({
    code: request.body.code,
    name: request.body.name,
    address: request.body.address,
    description: request.body.description,
    capital: request.body.capital,
    owner: request.body.owner
  });

  company.save()
    .then(result => {
      response.redirect('/');
    })
    .catch(error => {
      console.log(`Could not save company object into database: ${error}`);
      response.redirect('/');
    })
};

function companiesPage(request, response) {
  Company.find()
    .then(result => {
      return response.render('companies', { companies: result });
    })
    .catch(error => {
      console.log(`Could not load companies data from database: ${error}`);
      return response.render('companies', { companies: null });
    });

}

module.exports = { add, companiesPage };