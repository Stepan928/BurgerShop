// Preloader
const body = document.querySelector("body");
window.addEventListener("load", () => {
	document.getElementById("preloader").style.display = "none";
	document.getElementById("preloader").style.transition = ".3s";
	body.style.overflow = "auto";
})
// To Top Button
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () =>{
	if (window.pageYOffset > 100) {
		toTop.classList.add("active");
	} else {
		toTop.classList.remove("active");
	}
})
// Sticky Navigation
window.addEventListener("scroll", () => {
	document.querySelector(".nav").classList.toggle("sticky", window.scrollY > 0);
})
// Navigation Open-Close
const burger = document.querySelector(".nav__burger");
const ul = document.querySelector("ul");
burger.addEventListener("click", () => {
	body.classList.toggle("lock");
	burger.classList.toggle("animate");
	ul.classList.toggle("open");
})
// Navigation <li></li> Click Close
const li = document.querySelectorAll("li");
for (const li_es of li ) {
	li_es.addEventListener("click", () => {
		body.classList.remove("lock");
		burger.classList.remove("animate");
		ul.classList.remove("open");
	})
}
// Logo Navigation Close
const logo = document.querySelector(".nav__logo-dark");
logo.addEventListener("click", () => {
	body.classList.remove("lock");
	burger.classList.remove("animate");
	ul.classList.remove("open");
})