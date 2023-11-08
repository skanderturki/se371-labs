let curriculum;
let levels;

const curriculum_api_url = "https://mocki.io/v1/f4516dc3-cb59-420d-9e15-32b269ae6a0b";
//const curriculum_api_url2 = "https://run.mocky.io/v3/382aa4ca-857b-43f5-962d-39696f62f63b";

document.addEventListener("DOMContentLoaded", () => {
    getCurriculum(); 
    
})

const getCurriculum = () => {
    let query_promise = fetch(curriculum_api_url);
    query_promise
          .then(response => response.json())
          .then(data => {
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
    const table_body = document.getElementById("table_curriculum_body");
    curriculum.levels.forEach( level => {
        // create a row for the level
        const tr = document.createElement('tr');
        tr.classList.add("level_row");
        const td = document.createElement('td');
        td.appendChild(document.createTextNode(level.name));
        td.setAttribute("colspan", "5");
        tr.appendChild(td);
        table_body.appendChild(tr);
        level.courses.forEach( course => {
            // create row for course
            const tr = document.createElement('tr');
            tr.classList.add("course_row");

            const td0 = document.createElement('td');
            td0.appendChild(document.createTextNode(course.name));
            tr.appendChild(td0);

            const td1 = document.createElement('td');
            td1.appendChild(document.createTextNode(course.description));
            tr.appendChild(td1);

            const td2 = document.createElement('td');
            td2.appendChild(document.createTextNode(course.code));
            tr.appendChild(td2);

            const td3 = document.createElement('td');
            td3.appendChild(document.createTextNode(course.credits));
            tr.appendChild(td3);

            const td4 = document.createElement('td');
            td4.appendChild(document.createTextNode(course.type));
            tr.appendChild(td4);

            table_body.appendChild(tr);
        });
    });
}

const registerTableRowsEventHandlers = () => {
    const rows = document.querySelectorAll(".course_row");
    rows.forEach(row => {
        row.addEventListener("click", (e) => {
            rows.forEach(row2 => {
                row2.classList.remove("row_class_selected");
            });
            row.classList.add("row_class_selected");
        });
    });
}