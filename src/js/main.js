import content from './modal.js';

const modalButton = document.querySelector('.popup-button');

let counter = localStorage.getItem('counter');
if (counter == null) {
  counter = 0;
}

const popUp = document.createElement('div');
const createPopUp = (content) => {
  popUp.classList.add('alert');
  popUp.innerHTML = content;
  document.body.appendChild(popUp);
};
createPopUp(content);

const resetButton = document.querySelector('.reset');
const appendPopUp = () => {
  popUp.classList.add('active');
  setCounter();
  if (localStorage.getItem('counter') > 4) {
    resetButton.classList.add('active');
  }
};

const resetCounter = () => {
  resetButton.classList.add('reset-action');
  localStorage.setItem('counter', 1);
  counter = 1;
  document.getElementById('counter').innerHTML =
    getCounter() < 2 ? `${getCounter()} time` : `${getCounter()} times`;
  setTimeout(resetAnimation, 600);
};

const resetAnimation = () => {
  resetButton.classList.remove('reset-action');
  resetButton.classList.remove('active');
};

const outsideClick = (e) => {
  if (e.target == popUp) {
    popUp.classList.remove('active');
  }
};

const closePopUp = () => {
  popUp.classList.remove('active');
};

const setCounter = () => {
  localStorage.setItem('counter', ++counter);

  document.getElementById('counter').innerHTML =
    getCounter() < 2 ? `${getCounter()} time` : `${getCounter()} times`;
};

const getCounter = () => {
  return localStorage.getItem('counter');
};

const closeButton = document.querySelector('.close-modal-button');
closeButton.addEventListener('click', closePopUp);

modalButton.addEventListener('click', appendPopUp);
window.addEventListener('click', outsideClick);
resetButton.addEventListener('click', resetCounter);
