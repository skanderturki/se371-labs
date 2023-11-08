const run = () => {
  alert("button pressed");
};

const arr_emp = [];
for (let d of data) {
  arr_emp.push(JSON.parse(d));
}

const cities_codes_map = new Map();
cities_codes_map.set("...All", "0");
cities_codes_map.set("Jeddah", "1");
cities_codes_map.set("Riyadh", "2");
cities_codes_map.set("Mekkah", "3");
cities_codes_map.set("Jizan", "4");
cities_codes_map.set("Taif", "5");

const cities_set = new Set();
for(let emp of arr_emp){
  cities_set.add(emp.address.city);
}

const createTRForEmployee = (employee) => {
  const tr = document.createElement("tr");

  createTDIntoTRFromText(tr, `${employee.id}`);
  createTDIntoTRFromText(tr, `${employee.name} ${employee.lastname}`);
  createTDIntoTRFromText(tr, `${employee.address.nb}, ${employee.address.street}, ${employee.address.city}`);

  return tr;
}

const createTDIntoTRFromText = (trow, textContent) => {
  const td = document.createElement("td");
  td.appendChild(document.createTextNode(textContent));
  trow.appendChild(td);
}


document.addEventListener("DOMContentLoaded", () => {
  createTableRows();
  applyCSSClassesToSelectedElements("#employee_table tr:nth-child(2n)", "grey");
  applyCSSClassesToSelectedElements("table, td, th", "border");
  populateCitiesSelector();
  updateTableFromSelectedOption();
});

const createTableRows = (city_code) => {
  const table_body = document.getElementById("employee_table_body");
  // remove current row
  while(table_body.firstChild){
    table_body.removeChild(table_body.firstChild);
  }

  // create rows
  for(let emp of arr_emp){
    if(!city_code || city_code === "0" || city_code === cities_codes_map.get(emp.address.city)){
      const tr = createTRForEmployee(emp);
      table_body.appendChild(tr);
    }
  }
}

const applyCSSClassesToSelectedElements = (selector, ...CSSClasses) => {
  const elements = document.querySelectorAll(selector);
  for(let elem of elements){
    for(let cls of CSSClasses){
      elem.classList.add(cls);
    }
  }
}

const populateCitiesSelector = () => {
  const cities_selector = document.querySelector("#cities_selector");
  appendNewElementIntoGivenDOMElement("option", "...All", "0", cities_selector);


  for(let city of cities_set){
    appendNewElementIntoGivenDOMElement("option", city, cities_codes_map.get(city), cities_selector);
  }
}

const appendNewElementIntoGivenDOMElement = (elementType, textContent, value, DOMElement) => {
  const newElement = document.createElement(elementType);
  newElement.appendChild(document.createTextNode(textContent));
  newElement.value = value;
  DOMElement.appendChild(newElement);
}


const updateTableFromSelectedOption = () => {
  const cities_selector = document.querySelector("#cities_selector");
  cities_selector.addEventListener("change", () => {
    const selected_city = cities_selector.options[cities_selector.selectedIndex].value;
    createTableRows(selected_city);
    applyCSSClassesToSelectedElements("#employee_table tr:nth-child(2n)", "grey");
    applyCSSClassesToSelectedElements("table, td, th", "border");
  });

}