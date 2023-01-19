/* eslint-disable no-undef */
const CONFIG = {
  'initialSnakeLength': 3,
  'initialSnakeSpeed': 1,
  'initialSnakeDirection': 'right', // DEFAULT //? up, down, left, right
  'initialSnakeColor': '#2dd36f' // DEFAULT //? HEX
};

let canvas = document.getElementById('gameCanvas');

const colorInput = document.getElementById('colorInput');
colorInput.addEventListener('input', () => {
  console.log('[input] colorInput', colorInput.value);
  CONFIG.initialSnakeColor = colorInput.value;
});

const playButton = document.getElementById('playButton');
playButton.addEventListener('click', () => {
  console.log('[click] playButton');

  startGame();

  playButton.style.display = 'none';
  exitButton.style.display = 'block';
  colorInput.style.display = 'none';
});

const exitButton = document.getElementById('exitButton');
exitButton.addEventListener('click', () => {
  console.log('[click] exitButton');

  endGame();

  exitButton.style.display = 'none';
  playButton.style.display = 'block';
  colorInput.style.display = 'block';
});

window.addEventListener('load', () => {
  console.log('[load] window');
  playButton.disabled = false;
});

function startGame() {
  canvas.style.display = 'block';
  canvas.width = 500;
  canvas.height = 500;

  // const ctx = canvas.getContext('2d');
}

function endGame() {
  canvas.remove();

  canvas = document.createElement('canvas');
  canvas.id = 'gameCanvas';
}
