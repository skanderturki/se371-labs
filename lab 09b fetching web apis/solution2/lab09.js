let curriculum;
let levels;

const curriculum_api_url = "https://mocki.io/v1/f4516dc3-cb59-420d-9e15-32b269ae6a0b";

// Use this other web API if the first one is too slow
// const curriculum_api_url = "https://run.mocky.io/v3/382aa4ca-857b-43f5-962d-39696f62f63b";

document.addEventListener("DOMContentLoaded", () => {
    getCurriculum();
});

const getCurriculum = () => {
    let query_promise = fetch(curriculum_api_url);
    query_promise.then(response => response.json())
          .then( data => {
              // use the data object (an array) here
              createCurriculumTable(data);
              createRowsHandlers();    
          })
          .catch((reject) => {
                console.log("Could not load data..." + reject);
          });
}

const createCurriculumTable = (curriculum) => {
    const table_body = document.getElementById("table_curriculum_body");

    curriculum.levels.forEach( level => {
        //create level row
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.appendChild(document.createTextNode(level.name));
        td.setAttribute("colspan", "5");
        tr.appendChild(td);
        tr.classList.add("level_row");
        table_body.appendChild(tr);

        level.courses.forEach( course => {
            //create row for course
            const tr = document.createElement("tr");

            const td0 = document.createElement("td");
            td0.appendChild(document.createTextNode(course.name));
            tr.appendChild(td0);

            const td1 = document.createElement("td");
            td1.appendChild(document.createTextNode(course.description));
            tr.appendChild(td1);

            const td2 = document.createElement("td");
            td2.appendChild(document.createTextNode(course.code));
            tr.appendChild(td2);

            const td3 = document.createElement("td");
            td3.appendChild(document.createTextNode(course.credits));
            tr.appendChild(td3);

            const td4 = document.createElement("td");
            td4.appendChild(document.createTextNode(course.type));
            tr.appendChild(td4);

            tr.classList.add("course_row");
            table_body.appendChild(tr);
        });
    });
}

const createRowsHandlers = () => {
    const rows = document.querySelectorAll(".course_row");
    rows.forEach( row => {
        row.addEventListener("click", (e) => {
            rows.forEach( row => {
                row.classList.remove("row_selected");
            });
            row.classList.add("row_selected");

            const code = document.getElementById("code");
            code.value = row.children[2].textContent;
        });
    });
}