let inputInfo = {
  email: '',
  message: '',
};

const emailInputGet = document.getElementById('emailBox');
const messageInputGet = document.getElementById('textBox');

emailInputGet.addEventListener('onkeydown', () => {
  console.log(emailInputGet.innerText);
});
