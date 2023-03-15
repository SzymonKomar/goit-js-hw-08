const { throttle } = require('lodash');
let inputInfo = {
  email: '',
  message: '',
};
// main data object
const emailInputGet = document.querySelector('input');
const messageInputGet = document.querySelector('textarea');
const formGet = document.querySelector('form');
// const declaration
emailInputGet.addEventListener('input', () => {
  inputInfo = { ...inputInfo, email: emailInputGet.value };
});
messageInputGet.addEventListener('input', () => {
  inputInfo = { ...inputInfo, message: messageInputGet.value };
});
// data object automatic update
formGet.addEventListener(
  'input',
  throttle(() => {
    localStorage.setItem('input_info', JSON.stringify(inputInfo));
  }, 500)
);
// adding data object to local storage
const inputInfoGet = JSON.parse(localStorage.getItem('input_info'));

function checkInputStatus() {
  if (localStorage.getItem('input_info') === null) {
    return;
  } else {
    emailInputGet.value = inputInfoGet.email;
    messageInputGet.value = inputInfoGet.message;
  }
}
emailInputGet.addEventListener('focus', checkInputStatus);
//Event listener for email-input-field

const buttonGet = document.getElementById('form-button');
function createFeedback(e) {
  e.preventDefault();
  inputInfo = { ...inputInfo, email: emailInputGet.value };
  inputInfo = { ...inputInfo, message: messageInputGet.value };
  console.log(inputInfo);
  localStorage.clear('input_info');
  formGet.reset('input_info');
}
buttonGet.addEventListener('click', createFeedback);
//Event listener for submit-button
