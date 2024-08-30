/**
 * Q6: parsing the data
 */
const arrObj = [];

data.forEach( str => {
  arrObj.push( JSON.parse(str) );
});

/**
 * Q7: first approach
 */
function Customer1(id, name, lastname, addr_nb, addr_street, addr_city) {
  this.id = id;
  this.name = name;
  this.lastname = lastname;
  this.address = {};
  this.address.nb = addr_nb;
  this.address.street = addr_street;
  this.address.city = addr_city;
  this.address.output = () => { return `${this.address.nb} ${this.address.street} ${this.address.city}`; };
  // Q8
  this.output = () => { return `${this.id}: ${this.name} ${this.lastname}, ${this.address.output()}`; };
}

const cust1 = new Customer1(15, "name1", "lastname1", 78, "street1", "city1");

/**
 * Q7: second approach
 */
function Customer2(id, name, lastname, address) {
  this.id = id;
  this.name = name;
  this.lastname = lastname;
  this.address = address;
  // Q8
  this.output = () => { return `${this.id}: ${this.name} ${this.lastname}, ${this.address.output()}`; };
}

function Address(nb, street, city) {
  this.nb = nb;
  this.street = street;
  this.city = city;
  this.output = () => { return `${this.nb} ${this.street} ${this.city}`; };
}

//const cust2 = new Customer2(23, "name2", "lastname3", {nb: 78, street: "street2", city: "city2"});
const cust3 = new Customer2(78, "name3", "lastname4", new Address(78, "street5", "city6"));

arrObj.push(cust1);
arrObj.push(cust3);
console.log(cust1.output());
console.log(cust3.output());

/**
 * Q9: filter by city
 */
const filterByCity = (arr, city) => {
  return arr.filter(o => o.address.city === city)
}

const riyadhCustomers = filterByCity(arrObj, "Riyadh");
console.log(riyadhCustomers);

/**
 * Q10: add output function to data loaded from file
 */
arrObj.forEach( obj => {
  if(obj.output === undefined || obj.output === null){
    // Here we do not use "this" because in this context "this" is undefined
    obj.address.output = () => { return `${obj.address.nb} ${obj.address.street} ${obj.address.city}`; };
    obj.output = () => { return `${obj.id}: ${obj.name} ${obj.lastname}, ${obj.address.output()}`; };
  }
});

arrObj.forEach(obj => console.log(obj.output()));




