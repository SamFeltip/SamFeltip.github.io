
let panes = document.querySelectorAll("main");

let page_tab_links = document.querySelector(".page-tabs");
let tab_buttons = page_tab_links.querySelectorAll(".tab");


tab_buttons.forEach(tab_button => {
  tab_button.addEventListener("click", event => {
    let tab_button_target = tab_button.getAttribute("data-target");
    let target_main = document.getElementById(tab_button_target);

    // remove selected from all tab buttons
    tab_buttons.forEach(tab_button => {
      tab_button.classList.remove("selected");
    })

    // hide all mains
    panes.forEach((pane) => {
      pane.style.display = "none";
    })

    // display target main
    target_main.style.display = "flex";

    // add highlight to clicked tab button

    tab_button.classList.add("selected");

  })
})
