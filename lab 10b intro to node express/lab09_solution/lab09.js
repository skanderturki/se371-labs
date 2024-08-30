let curriculum;
let levels;

const curriculum_api_url = "https://mocki.io/v1/f4516dc3-cb59-420d-9e15-32b269ae6a0b";
const curriculum_api_url2 = "https://run.mocky.io/v3/382aa4ca-857b-43f5-962d-39696f62f63b";

document.addEventListener("DOMContentLoaded", () => {
    //getCurriculum(); 
})

const getCurriculum = () => {
    let query_promise = fetch(curriculum_api_url2);
    query_promise.then(response => response.json())
          .then( data => {
              // use the data object (an array) here     
              curriculum = data;
              createTableRowsFromCurriculum(curriculum);
              registerTableRowsEventHandlers();
          })
          .catch((reject) => {
                console.log("Could not load data..." + reject);
          });
}


const createTableRowsFromCurriculum = (curriculum) => {
    const tableBody = document.getElementById("table_curriculum_body");
    curriculum.levels.forEach( level => {
    const tr = document.createElement("tr");
    const td0 = document.createElement("td");
    td0.setAttribute("colspan","5");
    td0.appendChild(document.createTextNode(level.name));
    td0.classList.add("grey");
    tr.append(td0);
    tableBody.appendChild(tr);

    level.courses.forEach( course => {
        const tr = document.createElement("tr");
        const td0 = document.createElement("td");
        td0.appendChild(document.createTextNode(course.name));
        const td1 = document.createElement("td");
        td1.appendChild(document.createTextNode(course.description));
        const td2 = document.createElement("td");
        td2.appendChild(document.createTextNode(course.code));
        const td3 = document.createElement("td");
        td3.appendChild(document.createTextNode(course.credits));
        const td4 = document.createElement("td");
        td4.appendChild(document.createTextNode(course.type));
        tr.append(td0, td1, td2, td3, td4);
        tableBody.appendChild(tr);
    })

    });
}

const registerTableRowsEventHandlers = () => {
    const rows = document.querySelectorAll("#table_curriculum_body tr");
    rows.forEach( r => {
        r.addEventListener("click", storeCodeIntoForm);
    });
}

const storeCodeIntoForm = (event) => {
    const row = event.currentTarget;
    const codeElement = document.getElementById("code");
    codeElement.value = row.childNodes[0].innerText;
}