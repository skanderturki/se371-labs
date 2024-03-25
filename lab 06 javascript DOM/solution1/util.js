const applyCSSClassesToElementByCssSelector = (cssSelector, ...classes) => {
  const elems = document.querySelectorAll(cssSelector);
  for(let e of elems){
    for(let c of classes){
      e.classList.add(c);
    }
  }
}

// If additional_first_option is null, no additional element will be created
const fillSelectorByIDWithElements = (id, elements, 
  additional_first_option) => {
    const sel = document.getElementById(id);
    if(!sel) return;
    sel.innerHTML = "";
    if(additional_first_option){
      const opt = document.createElement("option");
      opt.value = additional_first_option;
      opt.appendChild(document.createTextNode(additional_first_option));
      sel.appendChild(opt);
    }
    for(let e of elements){
      const opt = document.createElement("option");
      opt.value = e;
      opt.appendChild(document.createTextNode(e));
      sel.appendChild(opt);
    }
}