const msg = "Selem";
console.log( msg );

const employeesArr = [];
for(let emp of employees) {
  employeesArr.push(JSON.parse(emp));
}

console.log(employeesArr);

const Employee = function (id, name, lastname, add_nb, add_street, add_city) {
  this.id = id;
  this.name = name;
  this.lastname = lastname;
  this.address = {};
  this.address.nb = add_nb;
  this.address.street = add_street;
  this.address.city = add_city;
  this.output = () => {
    return `${this.id}: ${this.name} ${this.lastname}, ${this.address.nb}, ${this.address.street}, ${this.address.city}`;
  }
}

employeesArr.push(new Employee(456488, "Ward", "Jondob", 89, "Tariq Achamal", "Jazan"));

console.log(employeesArr[6].output());

/**
 * Returns an array containing only elements in which the given field is equal to the given value. 
 */
const filter = (arr, field, value) => {
  const res = [];
  for(let e of arr) {
    eval(`e.${field}`) === value ? res.push(e) : null;
  }
  return res;
}

console.log(filter(employeesArr,  "address.city", "Riyadh"));