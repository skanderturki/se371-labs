// A function that looks for the element by id, then checks it has a value set
// and displays an error message in the span that has the id (id_err)
// and applies a class to set the border to red
// it does the same when checking for the pattern
const validateInput = (evt, element_id, error_id, empty_msg, pat_msg, pattern) => {
      // get the element to validate
      const element = document.getElementById(element_id);
      const element_val = element.value;
      // check that a value is provided
      if( !element_val ) {
        evt.preventDefault();
        element.classList.add("red_border");
        const span = document.getElementById(error_id);
        span.textContent = empty_msg;
      } else {
        // check if the pattern is respected
        if( !pattern.test(element_val) ) {
          evt.preventDefault();
          element.classList.add("red_border");
          const span = document.getElementById(error_id);
          span.textContent = pat_msg;
        }
      }
}

// wait until document is loaded to register event listeners
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration_form");
  form.addEventListener("submit", (evt) => {
    // add validation listener for the email
    validateInput(evt, "email", "email_err", 
      "The email is required!", "The email has to be a valid PSU email!", 
      /^[a-zA-Z0-9_\-\.]+@psu\.edu\.sa$/
    );

    // Add validation listener for the first name
    validateInput(evt, "firstName", "firstName_err", 
      "The first name is required!", "The first name has to have from 2 to 20 characters", 
      /^[a-zA-Z]{2,20}$/
    );
  });

  // add handlers to remove error msg when elements get focus
  const inputs = document.querySelectorAll("input, select, textarea");
  inputs.forEach((inp) => {
    inp.addEventListener("focus", () => {
      inp.classList.remove("red_border");
      // the error msg is in the span element next to our input element
      // make sure that nextSibling exists, then make sure it has the error class
      // (that's one way to make sure it is a span used to display error messages)
      if(inp.nextSibling && inp.nextSibling.classList 
            && inp.nextSibling.classList.contains("error")){
        inp.nextSibling.textContent = "";
      }
    });
  });
})