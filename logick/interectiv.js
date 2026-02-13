window.addEventListener('DOMContentLoaded', () => {
  const boardElement = document.getElementById("game-board");

  const college = {
  floar1: {
    grid: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 2, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 2, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1],
      [1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 0, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 4, 1, 4, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 4, 0, 0, 0, 0, 0, 4, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 4, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    spawnAfterUp: { x: 0, y: 0 },
  },
  floor2: {
    grid: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],                              
      [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 3, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 3, 1, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 4, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
      [1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 0, 1, 1, 1, 1, 4, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 4, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    spawnAfterDown: { x: 0, y: 0 },
  },
};

let currentFloor = "floar1";
let player = { x: 17, y: 10 };

function draw() {
  boardElement.innerHTML = "";
  const currentGrid = college[currentFloor].grid;

  const CELL_SIZE = 25;
  boardElement.style.gridTemplateColumns = `repeat(${currentGrid[0].length}, ${CELL_SIZE}px)`;
  boardElement.style.gridTemplateRows = `repeat(${currentGrid.length}, ${CELL_SIZE}px)`;

  currentGrid.forEach((row, y) => {
    row.forEach((cell, x) => {
      const div = document.createElement("div");
      div.classList.add("cell");

      if (cell === 1) div.classList.add("wall");
      if (cell === 2 || cell === 3) div.classList.add("stairs");
      if (cell === 4) div.classList.add("trigger");
      if (x === player.x && y === player.y) div.classList.add("player");

      boardElement.appendChild(div);
    });
  });
}

function movePlayer(newX, newY) {
  const grid = college[currentFloor].grid;

  if (newY < 0 || newY >= grid.length || newX < 0 || newX >= grid[0].length)
    return;

  const cellValue = grid[newY][newX];
  if (cellValue === 1) return;
  if (cellValue === 2) {
    currentFloor = "floor2";
    player.x = 10;
    player.y = 2;
  } else if (cellValue === 3) {
    currentFloor = "floar1";
    player.x = 10;
    player.y = 2;
  } else {
    player.x = newX;
    player.y = newY;
  }

  draw();
}
function showBox() {
  document.getElementById("overlay").style.display = "flex";
}

function hideBox() {
  document.getElementById("overlay").style.display = "none";
}
window.addEventListener("keydown", (e) => {
  if (e.key === "W" || e.key === "w" || e.key === "Ц" || e.key === "ц") movePlayer(player.x, player.y - 1);
  if (e.key === "S" || e.key === "s" || e.key === "І" || e.key === "і") movePlayer(player.x, player.y + 1);
  if (e.key === "A" || e.key === "a" || e.key === "Ф" || e.key === "ф") movePlayer(player.x - 1, player.y);
  if (e.key === "D" || e.key === "d" || e.key === "В" || e.key === "в") movePlayer(player.x + 1, player.y);
  if (e.key === "Enter") { if (college[currentFloor].grid[player.y][player.x] === 4) showBox()}; 
});

  draw();
});