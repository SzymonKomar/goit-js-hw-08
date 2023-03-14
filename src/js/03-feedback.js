const { throttle } = require('lodash');
let inputInfo = {
  email: '',
  message: '',
};
let summary = {};
const emailInputGet = document.querySelector('input');
const messageInputGet = document.querySelector('textarea');
const formGet = document.querySelector('form');
emailInputGet.addEventListener('input', () => {
  inputInfo = { ...inputInfo, email: emailInputGet.value };
});
messageInputGet.addEventListener('input', () => {
  inputInfo = { ...inputInfo, message: messageInputGet.value };
});
formGet.addEventListener(
  'input',
  throttle(() => {
    localStorage.setItem('input_info', JSON.stringify(inputInfo));
  }, 500)
);
const inputInfoGet = JSON.parse(localStorage.getItem('input_info'));

function checkInputStatus() {
  if (emailInputGet.value == '') {
    emailInputGet.value = inputInfoGet.email;
  }
  if (messageInputGet.value == '') {
    messageInputGet.value = inputInfoGet.message;
  }
}
emailInputGet.addEventListener('blur', checkInputStatus);
//Code for auto-callback

const buttonGet = document.querySelector('submit');
