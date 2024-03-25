

const arrObj = [];
data.forEach(str => {
  arrObj.push(JSON.parse(str));
});

/**
 * Q1
 */
const findById = (arr, id) => {
  return arr.find(obj => obj.id === id);
}

console.log(findById(arrObj, 14509658));

/**
 * Q2
 */
const getTableRowForCustomer = (customer) => {
  return (`<tr>
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.lastname}</td>
            <td>${customer.address.nb} ${customer.address.street}, ${customer.address.city}</td>
          </tr>`);
}


/**
 * Q3
 */
const initial = "<table><thead><th>ID</th><th>Name</th><th>Lastname</th><th>Address</th></thead><tbody>";
const getTableHTML = (arr) => {
  let tableHTML = arr.reduce((prev, obj) => { return `${prev} ${getTableRowForCustomer(obj)}`;}, initial);
  return tableHTML + "</tbody><table>";
}


document.write(getTableHTML(arrObj));

/**
 * Q4
 */
const sortedById = arrObj.sort((objA, objB) => {
  return objA.id - objB.id;
});

console.log(sortedById);

const sortedByCity = arrObj.sort((objA, objB) => { 
  if(objA.address.city > objB.address.city){
    return 1;
  } else if (objA.address.city > objB.address.city){
    return -1;
  } else {
    return 0;
  }
});

console.log(sortedByCity);