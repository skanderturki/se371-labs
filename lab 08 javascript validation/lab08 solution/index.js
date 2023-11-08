const error_msg = "The entered email is not a valid PSU email!";

const addEmailValidation = (e) => {
  const email = document.getElementById("email");
  const val = email.value;
  const eval = /^[a-zA-Z0-9_\-\.]+@psu\.edu\.sa$/.test(val);
  if(!eval) {
    e.preventDefault();
    const email_err = document.getElementById("email_err");
    if(email_err.firstChild) {
      email_err.removeChild(email_err.firstChild);
    }

    email_err.appendChild(document.createTextNode(error_msg));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration_form");
  form.addEventListener("submit", (e) => {
    addEmailValidation(e);
  })
});

