'use strict';

const accessBtn = document.querySelector('.access__form-btn');
const input = document.querySelector('.access__form-input');
const errorMessage = document.querySelector('.access__form-erorr-message');

const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

accessBtn.addEventListener('click', function (event) {
  event.preventDefault();

  if (input.value === '' || !input.value.match(emailFormat)) {
    errorMessage.classList.remove('access__form-erorr-message--hidden');
    if (input.value === '') {
      errorMessage.innerText = 'Oops! Please add your email';
    } else if (!input.value.match(emailFormat)) {
      errorMessage.innerText = 'Oops! Please check your email';
    }
  } else errorMessage.classList.add('access__form-erorr-message--hidden');
});
