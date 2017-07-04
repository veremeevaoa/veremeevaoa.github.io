var link = document.querySelector(".card-btn");
var popup = document.querySelector(".modal-link");
var over = document.querySelector(".modal-overlay");
var close = popup.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");
var storagel = localStorage.getItem("login");
var storagem = localStorage.getItem("email");
var label = document.querySelector(".modal-label");
var input = document.querySelector(".modal-field");

link.addEventListener("click", function (event) {
  event.preventDefault();
  over.classList.add("modal-overlay-show");
  popup.classList.add("modal-link-show");
  if (storagel) {
    login.value = storagel;
    email.focus();
  } else {
    login.focus();
  }
  if (storagem) {
    email.value = storagem;
    message.focus();
  } else {
    email.focus();
  }
});
close.addEventListener("click", function (event) {
  event.preventDefault();
  over.classList.remove("modal-overlay-show");
  popup.classList.remove("modal-link-show");
  popup.classList.remove("modal-error");
});
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!login.value || !email.value || !message.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("login", login.value);
    localStorage.setItem("email", email.value);
  }
});
window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-link-show")) {
      over.classList.remove("modal-overlay-show");
      popup.classList.remove("modal-link-show");
      popup.classList.remove("modal-error");
    }
  }
});