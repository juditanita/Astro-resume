//navbar active link


const nav = document.querySelector("#navbar-default");
const navLinks = nav.querySelectorAll("a");
const currentURL = window.location.href;
navLinks.forEach((link) => {
  if (link.href === currentURL) {
    link.classList.add("active");
  }
});


//see contact model

const openModelBtn=document.querySelector("#contactModel");
const modelBox=document.querySelector("#contactFormModal");
const closeModelBtn =document.querySelector("#closeContactForm");

openModelBtn?.addEventListener('click', function(){
  modelBox.classList.remove("hidden")
  // stop scrolling
  document.body.classList.add("overflow-y-hidden")
  

})

closeModelBtn?.addEventListener("click", function(){
  modelBox.classList.add("hidden")
  document.body.classList.remove("overflow-y-hidden")
})


//form submiting


