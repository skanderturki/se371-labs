const run = () => {
  alert("button pressed");
};

const cities_set = new Set();

for (let d of data) {
  cities_set.add(d.address.city);
}

const makeTDForText = (text) => {
  const td = document.createElement("td");
  td.appendChild(document.createTextNode(text));
  return td;
}

const makeTRFromEmployee = (emp) => {
  const tr = document.createElement("tr");
  tr.appendChild(makeTDForText(emp.id));
  tr.appendChild(makeTDForText(`${emp.name} ${emp.lastname}`));
  tr.appendChild(makeTDForText(`${emp.address.nb} ${emp.address.street}, ${emp.address.city}`));
  return tr;
}

const createTable = (option) => {
  const tbody = document.querySelector("#employee_table_body");
  // remove old children
  while(tbody.firstChild) {
    tbody.removeChild(tbody.lastChild);
  }
  data.forEach((emp) => {
    if(option === "All" || option === emp.address.city) {
      const tr = makeTRFromEmployee(emp);
      tbody.appendChild(tr);
    }

  })

  applyCSSClassForSelectedElements("grey", "tbody tr:nth-child(2n + 1)");

  applyCSSClassForSelectedElements("border", "td, th");
}

const fillSelector = (cities) => {
  const selector = document.querySelector("#cities_selector");
  const option = document.createElement("option");
  option.appendChild(document.createTextNode("All"));
  option.value = "All";
  selector.appendChild(option);

  cities.forEach((city) => {
    const option = document.createElement("option");
    option.appendChild(document.createTextNode(city));
    option.value = city;
    selector.appendChild(option);
  });
}

const applyCSSClassForSelectedElements = (css_class, selector) => {
  const nodes = document.querySelectorAll(selector);
  nodes.forEach( (node) => {
    node.classList.add(css_class);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  createTable("All");



  fillSelector(cities_set);

  const selector = document.querySelector("#cities_selector");
  selector.addEventListener("change", () => {
    createTable(selector.value);
  });
});

