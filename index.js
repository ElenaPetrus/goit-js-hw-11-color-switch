const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


const CHANGE_DELAY = 1000;
let intervalId = null;

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector("body"),
};

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick () {

  refs.startBtn.disabled = true;
  intervalId = setInterval(() => {
    changeBodyColor ()
  }, CHANGE_DELAY);

};

function changeBodyColor () {
  refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
};


function onStopBtnClick () {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
  refs.body.style.backgroundColor = '#FFFFFF';
};


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};