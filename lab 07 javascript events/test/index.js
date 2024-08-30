const addInputFocusHandlers = () => {
  const inputs = document.querySelectorAll("input, select, textarea");
  inputs.forEach( (x) => {
    if(x.type !== "radio") {
      x.addEventListener("focus", () => {
        x.classList.add("highlight");
      });

      x.addEventListener("blur", () => {
        x.classList.remove("highlight");
      });
    }
  });
}

const addCountryCodeSpanHandler = () => {
  const country_selector = document.getElementById("country");
  country_selector.addEventListener("change", () => {
    const option = country_selector.options[country_selector.selectedIndex];
    const code = option.dataset.code;
    const span_code = document.getElementById("country_code");
    span_code.textContent = code;
  });
}

const addMotivationsRadioHandler = () => {
  const motivations_block = document.getElementById("motivations_block");
  const votingNo = document.getElementById("votingNo");
  const votingYes = document.getElementById("votingYes");
  votingNo.addEventListener("change", () => {
    const voting = document.querySelector('input[name="voting"]:checked');
    if(voting.value === "0") {
      motivations_block.classList.add("hide");
    } else {
      motivations_block.classList.remove("hide");
    }
  });
  votingYes.addEventListener("change", () => {
    const voting = document.querySelector('input[name="voting"]:checked');
    if(voting.value === "0") {
      motivations_block.classList.add("hide");
    } else {
      motivations_block.classList.remove("hide");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // add handlers for the input elements to highlight it when it gets focus
  addInputFocusHandlers();

  // add handler to modify the displayed country code when selected country changes
  addCountryCodeSpanHandler();

  // 
  addMotivationsRadioHandler();
});