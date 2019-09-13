'use strict';

var openPopupButton = document.querySelector('.page-header__button');
var closePopupButton = document.querySelector('.popup__button--close');
var formPopup = document.querySelector('.popup');
var overlay = document.querySelector('.overlay');
var nameInput = document.querySelector('.popup input[name="name"]');
var phoneInputs = document.querySelectorAll('input[type="tel"]');
var scrollButton = document.querySelector('.page-header__scroll-button');
var navItem = document.querySelector('.page-footer__nav');
var navButton = document.querySelector('.page-footer__block--nav .page-footer__button');
var addressItem = document.querySelector('.page-footer__address');
var addressButton = document.querySelector('.page-footer__block--address .page-footer__button');

var phoneMask = {
  mask: '+{7}(000)000-00-00'
};

phoneInputs.forEach(function (phone) {
  IMask(phone, phoneMask);
});

navButton.addEventListener('click', function () {
  navButton.classList.toggle('page-footer__button--open');
  navItem.classList.toggle('page-footer__nav--close');
});

addressButton.addEventListener('click', function () {
  addressButton.classList.toggle('page-footer__button--open');
  addressItem.classList.toggle('page-footer__address--close');
});

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

scrollButton.addEventListener('click', function () {
  document.querySelector('.advantages').scrollIntoView({
    behavior: 'smooth'
  });
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
