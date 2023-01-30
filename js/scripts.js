$(document).ready(function() {
   // Highlight the active section in the navigation bar
   $('body').scrollspy({ target: '#navbarNav' });
});

var aboutUsSection = document.getElementById("contacts");
var mainContentSection = document.getElementById("main-content");

document.getElementById("contacts-button").addEventListener("click", function() {
   if (aboutUsSection.style.display === "none"){
      aboutUsSection.style.display = "block";
      mainContentSection.style.display = "none";
   }
});

document.getElementById("nav-sections").addEventListener("click", function() {
   if (mainContentSection.style.display === "none"){
      mainContentSection.style.display = "block";
      aboutUsSection.style.display = "none";
   }
});