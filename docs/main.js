/* eslint-disable no-undef */
import { Snake } from './snake.js';

const CONFIG = {
  'initialSnakeLength': 3,
  'initialSnakeSpeed': 1,
  'initialSnakeDirection': 'right', // DEFAULT //? up, down, left, right
  'initialSnakeColor': '#2dd36f' // DEFAULT //? HEX
};

const colorInput = document.getElementById('colorInput');
colorInput.addEventListener('input', function () {
  console.log('[input] colorInput', colorInput.value);
  CONFIG.initialSnakeColor = colorInput.value;
});

window.addEventListener('load', function () {
  console.log('[load] window');
  unlockPlayButton();
});

function unlockPlayButton() {
  const playButton = document.getElementById('playButton');
  playButton.disabled = false;
  playButton.addEventListener('click', function () {
    console.log('[click] playButton');
    startGame();

    playButton.style.display = 'none';
    colorInput.style.display = 'none';
  });
}

function startGame() {
  const canvas = document.getElementById('gameCanvas');
  canvas.style.display = 'block';
  canvas.width = 500;
  canvas.height = 500;

  const ctx = canvas.getContext('2d');

  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.snake = new Snake(this, CONFIG.initialSnakeColor);
    }

    update() {
    }

    draw(context) {
      this.snake.draw(context);
    }
  }

  const game = new Game(canvas.width, canvas.height);
  console.log('game', game);

  function gameLoop() {
    game.draw(ctx);
    requestAnimationFrame(gameLoop);
  }

  gameLoop();
}
