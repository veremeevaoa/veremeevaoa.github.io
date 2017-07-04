var linkOpen = document.querySelector(".mail-us");
var link = document.querySelector(".modal-content");
var linkClose = link.querySelector(".modal-content-close");
var user = link.querySelector("[name=user-name]");
var email = link.querySelector("[name=email]");
var message = link.querySelector("[name=message]");
var storagel = localStorage.getItem("login");
var storagem = localStorage.getItem("email");
var form = link.querySelector("form");

var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");
      
//      Окно почты
      
linkOpen.addEventListener("click", function (event) {
  event.preventDefault();
  link.classList.add("modal-content-show");
  if (storagel) {
    user.value = storagel;
    email.focus();
  } else {
    user.focus();
  }
  if (storagem) {
    email.value = storagem;
    message.focus();
  } else {
    email.focus();
  }
});
linkClose.addEventListener("click", function (event) {
  event.preventDefault();
  link.classList.remove("modal-content-show");
  link.classList.remove("modal-error");
});
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!user.value || !email.value || !message.value) {
    event.preventDefault();
    link.classList.remove("modal-error");
    link.offsetWidth = link.offsetWidth;
    link.classList.add("modal-error");
  } else {
    localStorage.setItem("login", user.value);
    localStorage.setItem("email", email.value);
  }
});
window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (link.classList.contains("modal-content-show")) {
      link.classList.remove("modal-content-show");
      link.classList.remove("modal-error");
    }
  }
});
      
//      Окно карты
      
mapOpen.addEventListener("click", function (event) {
  event.preventDefault();
  mapPopup.classList.add("modal-map-show");
});
mapClose.addEventListener("click", function (event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-map-show");
});
window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("modal-map-show")) {
      mapPopup.classList.remove("modal-map-show");
    }
  }
});
