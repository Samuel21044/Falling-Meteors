export function saveScore(game) {
  game.highScore = game.Score;
  localStorage.setItem('savedScoreFM', JSON.stringify(game.Score));
}