const cities_phone_codes = new Map();
cities_phone_codes.set("1", "+966");
cities_phone_codes.set("2", "+968");
cities_phone_codes.set("3", "+965");
cities_phone_codes.set("4", "+20");
cities_phone_codes.set("5", "+962");
cities_phone_codes.set("6", "+963");
cities_phone_codes.set("7", "+961");

document.addEventListener("DOMContentLoaded", () => {
  addInputFocusEventHanlder();
  updatePhoneCodeInSpan();
  updateMotivationsBlock();
});

const addInputFocusEventHanlder = () => {
  const inputs = document.querySelectorAll("input, select");
  for(let inp of inputs){
    inp.addEventListener("focus", () => {
      inp.style.backgroundColor = "#9abdd2";
    });
    inp.addEventListener("blur", () => {
      inp.style.backgroundColor = null;
    });
  }
};

const updatePhoneCodeInSpan = () => {
  const select_city = document.querySelector("#country");
  select_city.addEventListener("change", () => {
    // find the currently selected country phone code
    const country_code_span = document.querySelector("#country_code");
    const selected_code = select_city.options[select_city.selectedIndex].value;
    const country = cities_phone_codes.get(selected_code);

    // create the new content of the span element with the country phone code
    country_code_span.removeChild(country_code_span.firstChild);
    country_code_span.appendChild(document.createTextNode(country));
  })
}

const updateMotivationsBlock = () => {
  const votingNo = document.getElementById("votingNo");
  const votingYes = document.getElementById("votingYes");

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