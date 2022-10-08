export default class player {
  constructor(x, y) {
    this.x = x; this.y = y;
    this.w = 65; this.h = 65;
    this.speed = 0;
    this.maxSpeed = 120;
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }
  moveRight() {
    this.speed = this.maxSpeed;
  }
  stop() {
    this.speed = 0;
  }
  update(deltaTime) {
    //speed x and y
    this.x += this.speed / deltaTime;

    //constrain
    if(this.x < 0) this.x = 0;
    if(this.x+this.w > 750) this.x = 750-this.w;
  }
  draw(ctx) {
    ctx.fillStyle = 'black';
    //black line
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.fillStyle = 'rgb(225, 125, 20)';
    //square itself
    ctx.fillRect(this.x + 5, this.y + 5, this.w-10, this.h-10);
  }
}