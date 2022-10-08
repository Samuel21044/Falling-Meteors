// Importing
import './style.css';
import Game from './game.js'

//defining things
let canvas = document.getElementById("screen");
let ctx = canvas.getContext("2d");
let game = new Game();

//loop
let lastTime = 0;
function loop(timeStamp){
  let dt = timeStamp - lastTime;
  lastTime = timeStamp;
  ctx.clearRect(0, 0, 1350, 640);
  ctx.fillStyle = 'rgb(20, 20, 20)';
  ctx.fillRect(0, 0, 1350, 640);

  game.update(dt, ctx);
  game.draw(ctx);

  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);