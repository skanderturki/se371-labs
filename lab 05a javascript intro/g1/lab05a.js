const msg = "Selem";
console.log( msg );

const arrObj = [];

data.forEach(str => {
  arrObj.push( JSON.parse(str) );
});

/**
 * First approach for question 7
 */
function Customer1(id, name, lastname, address) {
  this.id = id;
  this.name = name;
  this.lastname = lastname;
  this.address = address;
  this.output = () => {
    return `${this.id}, ${this.name} ${this.lastname}`;
  }
}

const cust1 = new Customer1(45, "asda", "ggsdgsdg", {id: 78, street: "some street", city: "some city"});

/**
 * Second approach for question 7
 */
function Customer2(id, name, lastname, addr_nb, addr_street, addr_city) {
  this.id = id;
  this.name = name;
  this.lastname = lastname;
  this.address = {};
  this.address.nb = addr_nb;
  this.address.street = addr_street;
  this.address.city = addr_city;
  this.output = () => `${this.id}, ${this.name} ${this.lastname}`;
}

const cust2 = new Customer2(45, "asda", "ggsdgsdg", 78, "some street", "some city");

console.log(cust1.output());
console.log(cust2.output());

const customersFromCity2 = (arr, property, value) => {
  return arr.filter( obj => obj[property] === value );
};

const customersFromCity = (arr, city) => {
  return arr.filter( obj => obj.address.city === city );
};

console.log( customerFromCity(arrObj, "Riyadh") );