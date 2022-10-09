export function saveScore(game) {
  game.highScore = game.Score;
  localStorage.setItem('savedScoreFS', JSON.stringify(game.Score));
}