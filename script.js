const toggleButton = document.getElementById("nav-to");
const navLinks = document.getElementById("nav-links");
const toogleButton = document.getElementById("back-to");

toggleButton.addEventListener("click",function(){
    navLinks.classList.toggle("active");
})

toogleButton.addEventListener("click",function(){
    navLinks.classList.toggle("active");
})