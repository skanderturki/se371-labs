let curriculum;
let levels;

const curriculum_api_url = "https://mocki.io/v1/f4516dc3-cb59-420d-9e15-32b269ae6a0b";

// Use this other web API if the first one is too slow
// const curriculum_api_url = "https://run.mocky.io/v3/382aa4ca-857b-43f5-962d-39696f62f63b";



const getCurriculum = () => {
    let query_promise = fetch(curriculum_api_url);
    query_promise.then(response => response.json())
          .then( data => {
              // use the data object (an array) here
              console.log(data);     
          })
          .catch((reject) => {
                console.log("Could not load data..." + reject);
          });
}