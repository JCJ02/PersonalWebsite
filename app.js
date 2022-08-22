const menuButton = document.querySelector("#mobilemenuBtn");
const menuLinks = document.querySelector(".navbarMenu");
const icons = document.querySelector(".socmedLinks");

menuButton.addEventListener("click", function() {
	menuButton.classList.toggle("isActive");
	menuLinks.classList.toggle("active");
	icons.classList.toggle("active");
})



