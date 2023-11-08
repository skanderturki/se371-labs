const country_codes_map = new Map();
country_codes_map.set("1", "+966");
country_codes_map.set("2", "+968");
country_codes_map.set("3", "+965");
country_codes_map.set("4", "+20");
country_codes_map.set("5", "+962");
country_codes_map.set("6", "+963");
country_codes_map.set("7", "+961");

document.addEventListener("DOMContentLoaded", () => {
  addEventListenersToInputs();
  addEventListenerToCountrySelector();
  addEventListenerToMotivationsBlock();
})

const addEventListenersToInputs = () => {
  const selector = "input, select";
  const elements = document.querySelectorAll(selector);

  for(let inp of elements){
    inp.addEventListener("focus", () => {
      inp.style.backgroundColor = "#d1d189";
    });

    inp.addEventListener("blur", () => {
      inp.style.backgroundColor = "";
    });
  }
}


const addEventListenerToCountrySelector = () => {
  const select_input = document.getElementById("country");
  select_input.addEventListener("change", () => {
    let country_code = select_input.options[select_input.selectedIndex].value;
    let country_phone_code = country_codes_map.get(country_code);

    const phone_span = document.getElementById("country_code");
    phone_span.removeChild(phone_span.firstChild);
    phone_span.appendChild(document.createTextNode(country_phone_code));
  })

}

const addEventListenerToMotivationsBlock = () => {

  const votingNo = document.querySelector("#votingNo");
  const votingYes = document.querySelector("#votingYes");

  votingNo.addEventListener("change", () => {
    const motivations_block = document.getElementById("motivations_block");
    motivations_block.classList.add("hide");
    motivations_block.classList.remove("show");
  });
  votingYes.addEventListener("change", () => {
    const motivations_block = document.getElementById("motivations_block");
    motivations_block.classList.add("show");
    motivations_block.classList.remove("hide");
  });

}