let register = document.querySelector(".register");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formBox = document.querySelector(".form-box");

register.addEventListener("click", () => {
	slider.classList.add("moveslider");
	formBox.classList.add("form-box-move");
});

login.addEventListener("click", () => {
	slider.classList.remove("moveslider");
	formBox.classList.remove("form-box-move");
});
