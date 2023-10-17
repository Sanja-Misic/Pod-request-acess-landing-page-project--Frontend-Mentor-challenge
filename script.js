'use strict';
// console.log('radi');

const accessBtn = document.querySelector('.access__form-btn');
const input = document.querySelector('.access__form-input');
const errorMessage = document.querySelector('.access__form-erorr-message');

const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

accessBtn.addEventListener('click', function (event) {
  event.preventDefault();
  console.log(input.value);

  if (input.value === '' || !input.value.match(emailFormat)) {
    errorMessage.classList.remove('access__form-erorr-message--hidden');
  } else errorMessage.classList.add('access__form-erorr-message--hidden');
});
