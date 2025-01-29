document.addEventListener("DOMContentLoaded", () => {
  const gameArena = document.getElementById("game-arena");
  const arenaSize = 500;
  const cellSize = 20;
  let score = 0;
  let gameStarted = false;
  let food = { x: 300, y: 200 };
  let snake = [
    { x: 160, y: 200 },
    { x: 140, y: 200 },
    { x: 120, y: 200 },
  ];
  let dx = cellSize;
  let dy = 0;

  function startGame() {
    const scoreBoard = document.createElement("div");
    scoreBoard.id = "score-board";
    scoreBoard.textContent = "10";
    document.body.insertBefore(scoreBoard, gameArena);

    const startButton = document.createElement("button");
    startButton.id = "start-button";
    startButton.textContent = "Start";
    startButton.classList.add("start-button");
    document.body.appendChild(startButton);
    startButton.addEventListener("click", () => {
      startButton.style.display = "none";

      runGame();
    });
  }
  startGame();
  function runGame() {
    gameStarted = true;
    gameLoop();
  }
  function gameLoop() {
    setInterval(() => {
      drawScoreBoard();
      drawFoodAndSnake();
    }, 1000);
  }
  function drawScoreBoard() {
    const scoreBoard = document.getElementById("score-board");
    scoreBoard.textContent = `Score : ${score}`;
  }
  function drawFoodAndSnake(){
    gameArena.innerHTML = '';

    const foodElement = drawDiv(food.x, food.y, 'food');
    gameArena.appendChild(foodElement);

    const snakeElement = drawDiv(snake.x, snake.y, 'snake');
    gameArena.appendChild(snakeElement);
  }
  function drawDiv(x, y, className){
    const div = document.createElement('div');
    div.classList.add(className);
    div.style.top = `${y}px`
    div.style.left = `${x}px`
    return div;
  }
});
