const email_msg = "The email should be be a valid PSU email (xxxxxx@psu.edu.sa)";
const firstName_msg = "The first name must contain only letters";
const lastName_msg = "The last name must contain only letters";
const phoneNumber_msg = "The phone number must contain only numbers (10 to 14 digits)";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration_form");
  form.addEventListener("submit", (e) => {
    validateData(e, "email", /^[a-zA-Z0-9_\-\.]+@psu\.edu\.sa$/, email_msg, "email_err");
    validateData(e, "firstName", /^[a-zA-Z]{2,20}$/, firstName_msg, "firstName_err");
    validateData(e, "lastName", /^[a-zA-Z]{2,20}$/, lastName_msg, "lastName_err");
    validateData(e, "phoneNumber", /^[0-9]{10,14}$/, phoneNumber_msg, "phoneNumber_err");
  });
});

const validateData = (e, id, pattern, msg, id_err) => {
  const element = document.getElementById(id);
    const value = element.value;
    if(!pattern.test(value)){
      e.preventDefault();
      displayErrorMessage(msg, id_err);
    } else {
      displayErrorMessage("", id_err)
    }
};

const displayErrorMessage = (msg, id) => {
  const display = document.getElementById(id);
  if(display.firstChild) display.removeChild(display.firstChild);
  display.appendChild(document.createTextNode(msg));
}