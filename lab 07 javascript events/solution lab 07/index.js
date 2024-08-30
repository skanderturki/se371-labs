
document.addEventListener("DOMContentLoaded", () => {
  // create event handlers for input that get/lose focus
  const inputs = document.querySelectorAll("input, select, textarea");
  inputs.forEach((input) => {
    input.addEventListener("focus", () => {
      input.classList.add("focus");
    });
    input.addEventListener("blur", () => {
      input.classList.remove("focus");
    });
  });

  // create event handler for selected option change
  const select = document.querySelector("#country");
  const country_code = document.querySelector("#country_code");
  select.addEventListener("change", () => {
    const code = select.options[select.selectedIndex].dataset.code;
    country_code.textContent = code;
  })

  // create event hanlder for voting radio and show/hide motivations area
  const motivations = document.querySelector("#motivations_block");
  const voting_radios = document.querySelectorAll('input[name="voting"]');
  voting_radios.forEach((radio) => {
    radio.addEventListener('change', () => {
      motivations.classList.toggle('hide');
    });
  });
  


})