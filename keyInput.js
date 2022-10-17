export default class keyboard {
  constructor (player, game) {

    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
            player.moveLeft();
          break;
        case 39:
            player.moveRight();
          break;
        case 13:
            game.gamestate = 2;
            game.Score = 0;
          break;
      }
    });

    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
            if(player.speed < 0) player.stop();
          break;
        case 39:
            if(player.speed > 0) player.stop();
          break;
      }
    });
  }
}