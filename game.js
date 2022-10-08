//importing stuff
import player from './player.js';
import keyboard from './keyInput.js';
import fallingBlocks from './fallingBlocks.js';

export default class Game {
  constructor() {

    //blocks
    this.newBlock = true;
    this.FallingBlocks = new fallingBlocks();
    this.fallingBlocksL = [];

    //other stuff
    this.Player = new player(500, 550);

    this.Keyboard = new keyboard(this.Player, this);
    new keyboard(this.Player, this);

    //score
    this.timerScore = 100;
    this.Score = 0;
    this.highScore = 0;
  }

  update(deltaTime, ctx) {

    //blocks
    if(this.newBlock) {
      //give a random output
      let shoot = Math.round(Math.random() * 6);
      if(shoot === 1) {
        //how fast the bullets shoot out per second
        this.fallingBlocksL.push(new fallingBlocks(Math.round(Math.random() * ((750-this.FallingBlocks.w) - 1) + 1), -50));
      }
    }

    //having the bullet things update
    for(let i = 0; i < this.fallingBlocksL.length; i++) {
      this.fallingBlocksL[i].draw(ctx);
      this.fallingBlocksL[i].moveDown();
      this.fallingBlocksL[i].update(deltaTime, this.fallingBlocksL, this.Player, this);
    }

    //updating other objects n stuff
    this.Player.update(deltaTime); this.Player.draw(ctx);

    //score
    if(this.newBlock) {
      this.timerScore--;
      if(this.timerScore <= 0) {
        this.Score++;
        this.timerScore = 100;
      }
    }
  }
  draw(ctx) {
    if(!this.newBlock) {
      ctx.textAlign = 'center';
      //restart
      ctx.font = '50px Arial';
      ctx.fillText('You Died', 375, 200);
      ctx.font = '30px Arial';
      ctx.fillText('Press enter to play again', 375, 400);

      //score
      ctx.fillText('Score: ' + parseFloat(this.Score), 375, 280);
      ctx.fillText('High Score: ' + parseFloat(this.highScore), 375, 320);

      if(this.Score > this.highScore) {
        this.highScore = this.Score;
      }
    }
  }
}