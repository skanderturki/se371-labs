
const cities_set = new Set();
var employees_displayed = [];

// Load employees and cities
const employees_all = [];
for(let d of data ) {
  const emp = JSON.parse(d);
  cities_set.add(emp.address.city);
  employees_all.push(emp);
  employees_displayed.push(emp);
}

const createTRForEmployee = (employee) => {
  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.appendChild(document.createTextNode(employee.id));

  let td2 = document.createElement("td");
  td2.appendChild(document.createTextNode(`${employee.name} ${employee.lastname}`));

  let td3 = document.createElement("td");
  td3.appendChild(document.createTextNode(`${employee.address.nb}, 
      ${employee.address.street}, ${employee.address.city}`));

  tr.append(td1, td2, td3);

  return tr;
}

const constructTableFromData = (employees_to_display) => {
   // Create table out of data array
   const tbody = document.getElementById("employee_table_body");
   if(!tbody) return;
   tbody.innerHTML = "";

   for(let emp of employees_to_display){
     tbody.appendChild(createTRForEmployee(emp));
   }
 
   // Apply CSS class to even rows
   applyCSSClassesToElementByCssSelector("tr:nth-child(2n)", "grey");
 
   // Apply CSS class to table and td's
   applyCSSClassesToElementByCssSelector("table, td", "border");
};

const run = () => {
  // Read the value of the selected option
  const sel = document.getElementById("cities_selector");
  if(!sel){
    constructTableFromData(employees_displayed);
    return;
  } else {
    //const selected_index = sel.selectedIndex == -1? 0 : sel.selectedIndex;
    const selected = sel.selectedOptions[0].value;

    // Find all the employees from that city
    employees_displayed = [];
    for(let emp of employees_all){
      if(selected === "all" || emp.address.city === selected){
        employees_displayed.push(emp);
      }
    }

    // Reconstruct the table with filtered data
    constructTableFromData(employees_displayed);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  constructTableFromData(employees_displayed);


  // Fill the selector
  fillSelectorByIDWithElements("cities_selector", cities_set, "all");

})
