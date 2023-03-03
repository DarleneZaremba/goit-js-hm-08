import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormValueEnter, 500));

checkStorageOnReload();
const formData = {};

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
}

function onFormValueEnter(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function checkStorageOnReload() {
  if (localStorage.getItem('feedback-form-state')) {
    try {
      const parsedFormData = JSON.parse(
        localStorage.getItem('feedback-form-state')
      );
      input.value = parsedFormData.email;
      textarea.value = parsedFormData.message;
    } catch (err) {
      console.log(err.name);
    }
  }
}
