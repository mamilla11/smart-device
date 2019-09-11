'use strict';

var openPopupButton = document.querySelector('.page-header__contact--link');
var closePopupButton = document.querySelector('.popup__button--close');
var formPopup = document.querySelector('.popup');
var overlay = document.querySelector('.overlay');
var nameInput = document.querySelector('#name');

openPopupButton.addEventListener('click', function () {
  showOverlay();
  showPopup();
  nameInput.focus();
});

closePopupButton.addEventListener('click', function () {
  hideOverlay();
  closePopup();
});

overlay.addEventListener('click', function () {
  hideOverlay();
  closePopup();
});

window.addEventListener('keydown', function (evt) {
  var escape = 27;
  if (evt.keyCode === escape) {
    hideOverlay();
    closePopup();
  }
});

var showPopup = function () {
  formPopup.classList.remove('visually-hidden');
};

var closePopup = function () {
  formPopup.classList.add('visually-hidden');
};

var showOverlay = function () {
  overlay.classList.add('overlay--show');
};

var hideOverlay = function () {
  overlay.classList.remove('overlay--show');
};
