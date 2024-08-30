const validateInput = (evt, element_id, err_id, pattern, msg_empty, msg_invalid) => {
  const element = document.getElementById(element_id);
    const element_val = element.value;
    // check "required" constraint
    const element_err = document.getElementById(err_id);
    if(!element_val) {
      evt.preventDefault();
      element_err.textContent = msg_empty;
      element.classList.add("red_border");
    } else {
      const element_pat = pattern;
      if( !element_pat.test(element_val) ) {
        evt.preventDefault();
        element_err.textContent = msg_invalid;
        element.classList.add("red_border");
      }
    }
}

document.addEventListener("DOMContentLoaded", () => {
  // Email validation handler
  const form = document.getElementById("registration_form");
  form.addEventListener("submit", (evt) => {
    // validate email
    validateInput(evt, "email", "email_err", /^[a-zA-Z0-9_\-\.]+@psu\.edu\.sa$/, 
        "The email cannot be left empty!", "The email has to be a valid PSU email!");
    // validate name
    validateInput(evt, "firstName", "firstName_err", /^[a-zA-Z]{2,20}$/, 
    "The first name cannot be left empty!", "The first name has to be from 2 to 20 letters!");
  });
  // handler to remove red border when elements get focus
  const inputs = document.querySelectorAll("input, submit, textarea");
  inputs.forEach( (inp) => {
    inp.addEventListener("focus", () => {
      inp.classList.remove("red_border");
      if( inp.nextSibling && inp.nextSibling.classList 
           && inp.nextSibling.classList.contains("error")) {
        inp.nextSibling.textContent = "";
      }
    });
  });

})