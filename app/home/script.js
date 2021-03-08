'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');


///////////// Modal window ///////////////////////////////////////
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////// IMPLEMENT SMOOTH SCROLLING //////////////////////
btnScrollTo.addEventListener('click', function(e) {
  const s1coords = section1.getBoundingClientRect();
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // })

  // for modern browsers there's an easy way
  section1.scrollIntoView({ behavior: 'smooth' });
})

//////////////////////// Page Navigation //////////////////////
document.querySelectorAll('.nav__link').forEach(function(el) {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const id = el.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  })
})

///////////////////////////////////////////////////////////////
// NodeList
const allSections = document.querySelectorAll('.section');
console.log(allSections);
// HTMLCollection (updates dynamically)
const allButtons = document.getElementsByTagName('button');
const allButtons2 = document.getElementsByClassName('btn');
console.log(allButtons);

// create cookie banner
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics';
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>'

const header = document.querySelector('.header');
// header.prepend(message);
// header.append(message);
header.before(message);
// header.after(message);

// delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function() {
    message.remove();
    // message.parentElement.removeChild.message();
  })

  // Style
  message.style.backgroundColor = '#37383d';
  message.style.width = '120%';

  console.log(getComputedStyle(message).height);
  message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 20 + 'px';

  // document.documentElement.style.setProperty('--color-primary', 'orange');

  // Attributes
  const logo = document.querySelector('.nav__logo');
  console.log(logo.alt);

  console.log(logo.src); //http://localhost:8080/app/home/img/logo.png
  console.log(logo.getAttribute('src')); //img/logo.png

  const link = document.querySelector('.nav__link--btn');
  console.log(link.href); // http://localhost:8080/app/home/#
  console.log(link.getAttribute('href')); // #

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();