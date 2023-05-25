
let des_body = document.querySelector("#designer_body");
let dev_body = document.querySelector("#developer_body");

let designing_button = document.querySelector("#designing");
let developing_button = document.querySelector("#developing");

developing_button.addEventListener("click", event => {
  let body = document.querySelector("body");
  body.classList.remove("light");
  body.classList.add("dark");

  des_body.style.display = "none";
  dev_body.style.display = "flex";


  designing_button.classList.remove("selected");
  developing_button.classList.add("selected");

});

designing_button.addEventListener("click", event => {
  let body = document.querySelector("body");
  body.classList.remove("dark");
  body.classList.add("light");

  dev_body.style.display = "none";
  des_body.style.display = "flex";

  designing_button.classList.add("selected");
  developing_button.classList.remove("selected");

});
