
let panes = document.querySelectorAll("main");



let page_tab_links = document.querySelector(".page-tabs");

let des_body = document.querySelector("#design-body");
let dev_body = document.querySelector("#develop-body");
let plan_body = document.querySelector("#plan-body");

let designing_button = page_tab_links.querySelector("#designing");
let developing_button = page_tab_links.querySelector("#developing");
let planning_button = page_tab_links.querySelector("#planning");

planning_button.addEventListener("click", event => {
  let body = document.querySelector("body");

  panes.forEach((pane) => {
    pane.style.display = "none";
  })

  plan_body.style.display = "flex";

  designing_button.classList.remove("selected");
  developing_button.classList.remove("selected");
  planning_button.classList.add("selected");

});

developing_button.addEventListener("click", event => {
  let body = document.querySelector("body");

  panes.forEach((pane) => {
    pane.style.display = "none";
  })

  dev_body.style.display = "flex";

  designing_button.classList.remove("selected");
  planning_button.classList.remove("selected");
  developing_button.classList.add("selected");

});

designing_button.addEventListener("click", event => {
  let body = document.querySelector("body");
  body.classList.remove("dark");
  body.classList.add("light");

  panes.forEach((pane) => {
    pane.style.display = "none";
  })

  des_body.style.display = "flex";

  planning_button.classList.remove("selected");
  developing_button.classList.remove("selected");
  designing_button.classList.add("selected");

});
