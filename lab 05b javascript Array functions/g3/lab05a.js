
const arrObj = [];
data.forEach(str => {
  arrObj.push( JSON.parse(str) );
});

/**
 * Q1
 */
const findById = (arr, id) => {
  return arr.find(obj => { return obj.id === id;});
};

console.log(findById(arrObj, 14563254))

/**
 * Q2
 */
const getHTMLRowForCustomer = (customer) => {
  return `
          <tr>
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.lastname}</td>
            <td>${customer.address.nb} ${customer.address.street}, ${customer.address.city}</td>
          </tr>
        `;
};

console.log( getHTMLRowForCustomer(arrObj[2]) );

/**
 * Q3
 */
const getHTMLTableForAllCustomers = (arr) => {
  let html = `
              <table class="custTable">
                <thead>
                  <tr><th>ID</th><th>Name</th><th>Lastname</th><th>Address</th></tr>
                </thead>
                <tbody>
            `;
  arr.forEach(obj => {
    html += getHTMLRowForCustomer(obj);
  })
  return html + `</tbody></table>`;
};

document.write(getHTMLTableForAllCustomers(arrObj));

/**
 * Q4
 */
const sortedById = arrObj.toSorted((objA, objB) => {
  return objA.id - objB.id;
});

const sortedByCity = arrObj.toSorted((objA, objB) => {
  if(objA.address.city > objB.address.city){
    return 1;
  } else if(objA.address.city < objB.address.city){
    return -1;
  }
  return 0;
});

console.log(sortedById.reverse());
console.log(sortedByCity);