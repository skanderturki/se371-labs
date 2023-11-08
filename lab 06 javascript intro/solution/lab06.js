
const data_arr = [];
for(let d of data){
  const obj = JSON.parse(d);
  data_arr.push(obj);
}

function Customer(id, name, lastname, address){
  this.id = id;
  this.name = name;
  this.lastname = lastname;
  this.address = address;
  this.toString = () => {
    return `ID: ${id}, Name: ${name}, Lastname: ${lastname}, Address: ` + 
      address.toString();
  }
}

function Address(nb, street, city) {
  this.nb = nb;
  this.street = street;
  this.city = city;
  this.toString = () => {
    return `${nb}, ${street}, ${city}`;
  }
}

const cust1 = new Customer(12, "X", "Y", new Address(56, "khareddine", "Riyadh"));

data_arr.push(cust1);

function searchByCity(city){
  const customers = [];
  for(let c of data_arr){
    if(c.address.city === city) customers.push(c);
  }
  return customers;
}

console.log(searchByCity('Riyadh'));

