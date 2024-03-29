'use strict';

var page = document.querySelector('.page');
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

if (phoneInputs.length) {
  phoneInputs.forEach(function (phone) {
    /* eslint-disable */
    IMask(phone, phoneMask);
    /* eslint-enable */
  });
}

if (navButton && navItem) {
  navButton.addEventListener('click', function () {
    navButton.classList.toggle('page-footer__button--open');
    navItem.classList.toggle('page-footer__nav--close');
  });
}

if (addressButton && addressItem) {
  addressButton.addEventListener('click', function () {
    addressButton.classList.toggle('page-footer__button--open');
    addressItem.classList.toggle('page-footer__address--close');
  });
}

if (openPopupButton) {
  openPopupButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    showPopup();
  });
}

if (closePopupButton) {
  closePopupButton.addEventListener('click', function () {
    closePopup();
  });
}

if (overlay) {
  overlay.addEventListener('click', function () {
    closePopup();
  });
}

window.addEventListener('keydown', function (evt) {
  var escape = 27;
  if (evt.keyCode === escape) {
    closePopup();
  }
});

if (scrollButton) {
  scrollButton.addEventListener('click', function () {
    document.querySelector('.advantages').scrollIntoView({
      behavior: 'smooth'
    });
  });
}

var showPopup = function () {
  showOverlay();
  disablePageScroll();

  if (formPopup) {
    formPopup.classList.remove('visually-hidden');
  }

  if (nameInput) {
    nameInput.focus();
  }
};

var closePopup = function () {
  hideOverlay();
  enablePageScroll();

  if (formPopup) {
    formPopup.classList.add('visually-hidden');
  }
};

var showOverlay = function () {
  if (overlay) {
    overlay.classList.add('overlay--show');
  }
};

var hideOverlay = function () {
  if (overlay) {
    overlay.classList.remove('overlay--show');
  }
};

var disablePageScroll = function () {
  if (page) {
    page.style.overflow = 'hidden';
  }
};

var enablePageScroll = function () {
  if (page) {
    page.style.overflow = 'auto';
  }
};
