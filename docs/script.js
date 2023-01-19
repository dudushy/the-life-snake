/* eslint-disable no-undef */
const GAME = {
  'running': false,

  'SNAKE': {
    'length': 3,
    'speed': 7,
    'direction': 'right',
    'color': '#2dd36f',
    'headX': 0,
    'headY': 0,
    'xVelocity': 0,
    'yVelocity': 0
  },

  'CONFIG': {
    'tileCount': 1,
    'tileSize': 1,
  }
};
console.log('GAME', GAME);

const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

const colorInput = document.getElementById('colorInput');
colorInput.addEventListener('input', () => {
  console.log('[input] colorInput', colorInput.value);
  GAME.SNAKE.color = colorInput.value;
});

const playButton = document.getElementById('playButton');
playButton.addEventListener('click', () => {
  console.log('[click] playButton');

  startGame();
});

const exitButton = document.getElementById('exitButton');
exitButton.addEventListener('click', () => {
  console.log('[click] exitButton');

  endGame();
});

window.addEventListener('load', () => {
  console.log('[load] window');
  playButton.disabled = false;
});

document.body.addEventListener('keydown', (event) => {
  console.log('[keydown] event', event);

  //? UP
  if (event.key === 'ArrowUp') {
    console.log('[keydown] event', 'ArrowUp');

    GAME.SNAKE.direction = 'up';
    GAME.SNAKE.xVelocity = 0;
    GAME.SNAKE.yVelocity = -1;

    console.log('[keydown] SNAKE', GAME.SNAKE);
  }

  //? DOWN
  if (event.key === 'ArrowDown') {
    console.log('[keydown] event', 'ArrowDown');

    GAME.SNAKE.direction = 'down';
    GAME.SNAKE.xVelocity = 0;
    GAME.SNAKE.yVelocity = +1;

    console.log('[keydown] SNAKE', GAME.SNAKE);
  }

  //? LEFT
  if (event.key === 'ArrowLeft') {
    console.log('[keydown] event', 'ArrowLeft');

    GAME.SNAKE.direction = 'left';
    GAME.SNAKE.xVelocity = -1;
    GAME.SNAKE.yVelocity = 0;

    console.log('[keydown] SNAKE', GAME.SNAKE);
  }

  //? RIGHT
  if (event.key === 'ArrowRight') {
    console.log('[keydown] event', 'ArrowRight');

    GAME.SNAKE.direction = 'right';
    GAME.SNAKE.xVelocity = +1;
    GAME.SNAKE.yVelocity = 0;

    console.log('[keydown] SNAKE', GAME.SNAKE);
  }
});

function startGame() {
  canvas.style.display = 'block';
  playButton.style.display = 'none';
  exitButton.style.display = 'block';
  colorInput.style.display = 'none';

  canvas.width = 400;
  // canvas.width = (innerHeight / 10) * 7;
  console.log('canvas.width', canvas.width);

  canvas.height = 400;
  // canvas.height = (innerWidth / 10) * 7;
  console.log('canvas.height', canvas.height);

  GAME.CONFIG.tileCount = 20;
  console.log('tileCount', GAME.CONFIG.tileCount);

  GAME.CONFIG.tileSize = canvas.width / GAME.CONFIG.tileCount - 1;
  console.log('tileSize', GAME.CONFIG.tileSize);

  GAME.SNAKE.headX = Math.floor(GAME.CONFIG.tileCount / 2);
  GAME.SNAKE.headY = Math.floor(GAME.CONFIG.tileCount / 2);

  GAME.running = true;

  // drawSnake();
  drawGame();
}

function endGame() {
  canvas.style.display = 'none';
  exitButton.style.display = 'none';
  playButton.style.display = 'block';
  colorInput.style.display = 'block';

  clearScreen();

  GAME.running = false;
}

function drawGame() {
  if (!GAME.running) return;

  console.log('drawGame');
  changeSnakePosition();
  clearScreen();
  drawSnake();
  setTimeout(drawGame, 1000 / GAME.SNAKE.speed);
}

function clearScreen() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
  context.fillStyle = GAME.SNAKE.color;
  context.fillRect(
    GAME.SNAKE.headX * GAME.CONFIG.tileCount,
    GAME.SNAKE.headY * GAME.CONFIG.tileCount,
    GAME.CONFIG.tileSize,
    GAME.CONFIG.tileSize);
}

function changeSnakePosition() {
  GAME.SNAKE.headX += GAME.SNAKE.xVelocity;
  GAME.SNAKE.headY += GAME.SNAKE.yVelocity;

  console.log('[changeSnakePosition] SNAKE', GAME.SNAKE);
}
