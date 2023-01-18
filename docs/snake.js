export class Snake {
  constructor(game, color) {
    this.game = game;
    this.color = color;
    this.width = 50;
    this.height = 50;
    this.x = 0;
    this.y = 0;
  }

  update() {
  }

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}
