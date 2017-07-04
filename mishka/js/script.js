var mainMenu = document.querySelector(".main-nav");
var menuBtn = document.querySelector(".top-menu__btn");
var popupOpen = document.querySelectorAll('.modal-link');
var popup = document.querySelector(".modal");
var over = document.querySelector(".modal-overlay");

//отключение варианта стилей без js при загрузке страницы

function funonload() {
  mainMenu.classList.remove("main-nav--no-js");
}
window.onload = funonload;

//открытие и закрытие меню в мобильной версии

menuBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (menuBtn.classList.contains("top-menu__btn--closed")) {
    menuBtn.classList.remove("top-menu__btn--closed");
    menuBtn.classList.add("top-menu__btn--opened");
    mainMenu.classList.remove("main-nav--closed");
    mainMenu.classList.add("main-nav--opened");
  } else {
    menuBtn.classList.remove("top-menu__btn--opened");
    menuBtn.classList.add("top-menu__btn--closed");
    mainMenu.classList.remove("main-nav--opened");
    mainMenu.classList.add("main-nav--closed");
  }
});

//модальное окно формы заказа
for (var i = 0; i < popupOpen.length; i++) {
  popupOpen[i].addEventListener("click", function (event) {
    event.preventDefault();
    over.classList.add("modal-overlay-show");
    popup.classList.add("modal-show");
  });
};
over.addEventListener("click", function (event) {
  event.preventDefault();
  over.classList.remove("modal-overlay-show");
  popup.classList.remove("modal-show");
});
window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      over.classList.remove("modal-overlay-show");
      popup.classList.remove("modal-show");
    }
  }
});
