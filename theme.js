const blueBtn = document.querySelector('.blue');
const greenBtn = document.querySelector('.green');
const purpleBtn = document.querySelector('.purple');
const body = document.querySelector('body');

blueBtn.addEventListener('click', () => {
  body.style.backgroundColor = '#3498db';
  body.style.color = '#fff';
});

greenBtn.addEventListener('click', () => {
  body.style.backgroundColor = '#2ecc71';
  body.style.color = '#fff';
});

purpleBtn.addEventListener('click', () => {
  body.style.backgroundColor = '#9b59b6';
  body.style.color = '#fff';
});

blackBtn.addEventListener('click', () => {
  body.style.backgroundColor = '#000000';
  body.style.color = '#fff';
});
