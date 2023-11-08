document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("input, textarea");
  for(let elem of elements){
    elem.addEventListener("focus", () => {
      elem.style.backgroundColor = "khaki";
    })

    elem.addEventListener("blur", () => {
      elem.style.backgroundColor = null;
    })
  }

  const cities_select = document.querySelector("#country");
  cities_select.addEventListener("change", () => {
    const country_code = document.querySelector("#country_code");
    country_code.removeChild(country_code.firstChild);
    country_code.appendChild(document.createTextNode(cities_select.options[cities_select.selectedIndex].dataset.code));
  });

  const motivations_block = document.querySelector("#motivations_block");
  const votingNo = document.querySelector("#votingNo");
  const votingYes = document.querySelector("#votingYes");
  const voting_handler = () => {
    if(votingNo.checked){
      motivations_block.classList.add("hide");
      motivations_block.required = false;
    } else {
      motivations_block.classList.remove("hide");
      motivations_block.required = true;
    }
  }
  votingNo.addEventListener("change", voting_handler);
  votingYes.addEventListener("change", voting_handler);

});

const applyCSSClassesToSelectedElements = (selector, ...CSSClasses) => {
  const elements = document.querySelectorAll(selector);
  for(let elem of elements){
    for(let c of CSSClasses){
      elem.classList.add(c);
    }
  }
}