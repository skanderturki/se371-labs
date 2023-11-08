
const validateEmail = (e) => {
  const email = document.getElementById("email");
  if(email.validity.valueMissing){
    e.preventDefault();
    email.classList.remove("valid");
    email.classList.add("invalid");
    const errorMsg = "Email should not be empty!";
    const errorMsgSpan = document.getElementById("email_err");
    errorMsgSpan.innerText = errorMsg;
  } else {
    const patEmail = /^[a-zA-Z0-9_\-\.]+@psu\.edu\.sa$/;
    const testResult = patEmail.test(email.value);
    if(!testResult){
      e.preventDefault();
      email.classList.remove("valid");
      email.classList.add("invalid");
      const errorMsg = "Email should be a valid PSU email!";
      const errorMsgSpan = document.getElementById("email_err");
      errorMsgSpan.innerText = errorMsg;
    }

  }
}

document.addEventListener("DOMContentLoaded", ()=>{

  // Adding event handlers for form submission
  const form = document.getElementById("registration_form");
  form.addEventListener("submit", validateEmail);

  const submit_btn = document.getElementById("registration_submit");
  submit_btn.addEventListener("click", validateEmail);

  // Adding event handlers for resetting error messages on input elements
  const all_inputs = document.querySelectorAll("input[type='text'], input[type='email'], input[type='number']");
  all_inputs.forEach(i => {
    i.addEventListener("focus", ()=>{
      i.classList.add("valid");
      i.classList.remove("invalid");
      const errorMsgSpan = document.getElementById(`${i.id}_err`);
      errorMsgSpan.innerText = "";
    });
  });
})