const run = () => {
  alert("button pressed");
};

const cities_set = new Set();
for (let d of data) {
  cities_set.add(d.address.city);
}

const makeTRForEmployee = (emp) => {
  const tr = document.createElement("tr");

  tr.appendChild(makeTDForText(`${emp.id}`));
  tr.appendChild(makeTDForText(`${emp.name} ${emp.lastname}`));
  tr.appendChild(makeTDForText(`${emp.address.nb} ${emp.address.street}, ${emp.address.city}`));

  return tr;
}

const makeTDForText = (text) => {
  const td = document.createElement("td");
  td.appendChild(document.createTextNode(text));
  return td;
}

const createTable = (employees, filter) => {
  const tbody = document.querySelector("#employee_table_body");

  while(tbody.firstChild) {
    tbody.removeChild(tbody.lastChild);
  }

  employees.forEach((emp) => {
    if(filter === 'All' || filter === emp.address.city) {
      tbody.appendChild(makeTRForEmployee(emp));
    }

  }); 

  
  appyCSSClassToSelected('grey', 'tbody tr:nth-child(2n + 1)');
  appyCSSClassToSelected('border', 'td, th');
}

const appyCSSClassToSelected = (css_class, selector) => {
  const nodes = document.querySelectorAll(selector);
  nodes.forEach((node) => {
    node.classList.add(css_class);
  });
}

const createOptionForText = (text) => {
  const option = document.createElement("option");
  option.appendChild(document.createTextNode(text));
  option.value = text;
  return(option);
}

const fillSelector = (cities) => {
  const selector = document.querySelector("#cities_selector");

  selector.appendChild(createOptionForText("All"));

  cities.forEach((city) => {
    selector.appendChild(createOptionForText(city));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  createTable(data, "All");


  fillSelector(cities_set);

  const selector = document.querySelector("#cities_selector");
  selector.addEventListener("change", () => {
    createTable(data, selector.value);
  })
})