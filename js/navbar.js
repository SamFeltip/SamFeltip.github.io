const nav_button = document.querySelector("#nav-button");

let nav_state = false;

nav_button.addEventListener("click", event => {
  let navbar = document.querySelector("nav");
  nav_state = !nav_state;
  navbar.classList.toggle('hidden');

  // navbar_content.style.display = nav_state ? 'block' : 'none';
});