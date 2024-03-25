const run = () => {
  alert("button pressed");
};

const cities_set = new Set();
for (let emp of data) {
  cities_set.add(emp.address.city);
}

const makeTRForEmployee = (emp) => {
  const tr = document.createElement("tr");

  tr.appendChild( makeTDForText(`${emp.id}`) );
  tr.appendChild( makeTDForText(`${emp.name} ${emp.lastname}`) );
  tr.appendChild( makeTDForText(`${emp.address.nb} ${emp.address.street}, ${emp.address.city}`) );

  return tr;
};

const makeTDForText = (text) => {
  const td = document.createElement("td");
  td.appendChild( document.createTextNode(text) );
  return td;
};

const createTable = (employees) => {
  const tbody = document.querySelector("#employee_table_body");
  employees.forEach( (emp) => {
    tbody.appendChild( makeTRForEmployee(emp) );
  });
}

const applyCSSClassToSelected = (css_class, selector) => {
  const nodes = document.querySelectorAll(selector);
  nodes.forEach((node) => {
    node.classList.add(css_class);
  });
}

const fillSelector = (cities) => {
  const selector = document.querySelector("#cities_selector");
  selector.appendChild( makeOptionForText("All") );
  cities.forEach((city) => {
    selector.appendChild( makeOptionForText(city) );
  });
};

const makeOptionForText = (text) => {
  const option = document.createElement("option");
  option.appendChild(document.createTextNode(text));
  option.value = text;
  return option;
}

document.addEventListener("DOMContentLoaded", () => {
  createTable(data);

  applyCSSClassToSelected("grey", "tbody tr:nth-child(2n)");
  applyCSSClassToSelected("border", "table, td, th");

  fillSelector(cities_set);
});





















