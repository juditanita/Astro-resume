//navbar active link


const nav = document.querySelector("#navbar-default");
const navLinks = nav.querySelectorAll("a");
const currentURL = window.location.href;
navLinks.forEach((link) => {
  if (link.href === currentURL) {
    link.classList.add("active");
  }
});