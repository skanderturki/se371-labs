const msg = "Selem";
console.log( msg );

const arrObj = []; 

data.forEach( str => {
  arrObj.push( JSON.parse(str) );
});

function Customer1(id, name, lastname, address) {
  this.id = id;
  this.name = name;
  this.lastname = lastname;
  this.address = address;
  this.output = () => { return `${this.id}, ${this.name}`; };
}

const cust1 = new Customer1(45, "cutomer10", "lastname10", {nb: 165, street: "some street", city: "some city"});

function Customer2(id, name, lastname, addr_nb, addr_street, addr_city) {
  this.id = id;
  this.name = name;
  this.lastname = lastname;
  this.address = {};
  this.address.nb = addr_nb;
  this.address.street = addr_street;
  this.address.city = addr_city;
  this.output = () => { return `${this.id}, ${this.name}`; };
}

const cust2 = new Customer2(89, "cutomer11", "lastname11", 259, "some street 1", "some city 1");

arrObj.push(cust1);
arrObj.push(cust2);


const filterCustomersByCity = (arr, city) => {
  return arr.filter( obj => { return obj.address.city === city;});
}

console.log(filterCustomersByCity(arrObj, "Taif"));









console.log(cust1.output());


