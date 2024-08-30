const validateInput = (event, element_id, error_id, required_msg, pattern_msg, pattern) => {
    // check that the email is valid
    const element = document.getElementById(element_id);
    const element_val = element.value;
    if( !element_val ) {
      event.preventDefault();
      element.classList.add("red_border");
      const element_err = document.getElementById(error_id);
      element_err.textContent = required_msg;
    } else {
      if( !pattern.test(element_val) ) {
        event.preventDefault();
        element.classList.add("red_border");
        const element_err = document.getElementById(error_id);
        element_err.textContent = pattern_msg;
      }
    }
}


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('registration_form');
  form.addEventListener("submit", (evt) => {
    validateInput(evt, "email", "email_err", 
                    "The email is required!",
                    "The email has to be a valid PSU email!",
                    /^[a-zA-Z0-9_\-\.]+@psu\.edu\.sa$/
                  );

    validateInput(evt, "firstName", "firstName_err", 
                    "The first name is required!",
                    "The first name has to be from 2 to 20 characters!",
                    /^[a-zA-Z]{2,20}$/
                  );            
  })

  // register handlers to remove error signs when elements get focus
  const inputs = document.querySelectorAll("input, textarea");
  inputs.forEach( (inp) => {
    inp.addEventListener("focus", () => {
      if(inp.classList) {
        inp.classList.remove("red_border");
        if(inp.nextSibling 
          && inp.nextSibling.classList
          && inp.nextSibling.classList.contains("error")) {
            inp.nextSibling.textContent = "";
        }     
      }
    });
  });
})