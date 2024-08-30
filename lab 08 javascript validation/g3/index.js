MSG_EMAIL_REQUIRED = "The email should not be left empty...";
MSG_EMAIL_FORMAT = "The email should be a valid PSU email xxxxx@psu.edu.sa";

MSG_FIRSTNAME_REQUIRED = "The first name should not be left empty...";
MSG_FIRSTNAME_FORMAT = "The first name should contain from 2 to 20 letters";

// A function that checks for the validity of the input element
// It blocks submission of the form if input not valid
const addInputValidationHandler = (evt, elem_id, error_elem_id, required_msg, format_msg, pattern) => {
  const input = document.getElementById(elem_id);
  const input_value = input.value;
  const input_err = document.getElementById(error_elem_id);
  input_err.textContent = "";
  if( !input_value ) {
    // block HTTP request submission
    evt.preventDefault();
    input.classList.add("highlight");
    input_err.textContent = required_msg;
  } else {
    if( !pattern.test(input_value) ) {
      // block HTTP request submission
      evt.preventDefault();
      input.classList.add("highlight");
      input_err.textContent = format_msg;
    }
  }
}

// A function that removes error signals when elements gets focus
const addInputFocusHandler = () => {
  const inputs = document.querySelectorAll("input");
  inputs.forEach( (inp) => {
    console.log(inp.type);
    if( inp.type !== "radio" ) {
      inp.addEventListener("focus", () => {
        inp.classList.remove("highlight");
        if( inp.nextSibling && inp.nextSibling.classList.contains("error") ) {
          inp.nextSibling.textContent = "";
        }
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration_form");
  form.addEventListener("submit", (evt) => {
    // add a handler that will check for email validity and block form submission if so
    addInputValidationHandler(evt, "email", "email_err", MSG_EMAIL_REQUIRED, MSG_EMAIL_FORMAT, /^[a-zA-Z0-9_\-\.]+@psu\.edu\.sa$/);

    // add a handler that will check for name validity and block form submission if so
    addInputValidationHandler(evt, "firstName", "firstName_err", MSG_FIRSTNAME_REQUIRED, MSG_FIRSTNAME_FORMAT, /^[a-zA-Z]{2,20}$/);

    // add a handler that will remove error signals when elements gets focus
    addInputFocusHandler();
  });
});