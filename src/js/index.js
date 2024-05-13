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

const btnSending=document.getElementById("btn-sending"),
formSending=document.getElementById("submit-form");


formSending?.addEventListener('submit',function(e){
  e.preventDefault();

  btnSending.textContent="Sending now..."

  const serviceID = ASTRO_PUBLIC_SERVICE_ID;
  const templateID = ASTRO_PUBLIC_TEMPLATE_ID;
  const publicKey =ASTRO_PUBLIC_PUBLIC_KEY;


  emailjs.sendForm(serviceID, templateID, this,publicKey).then(
    () => {
       btn.textContent = 'Send Email';
       alert('Sent!');
    }, (err) => {
      btn.textContent = 'Send Email';
      alert(JSON.stringify(err));
   })
})
