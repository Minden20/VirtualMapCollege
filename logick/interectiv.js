window.addEventListener('DOMContentLoaded', () => {
  const boardElement = document.getElementById("game-board");

  const college = {
  floar0: {
    grid: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 1, 0, 0, 0, 1, 0, 5, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 5, 1, 0, 0, 1, 0, 0, 0, 1],
      [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
      [1, 4, 1, 1, 1, 4, 1, 1, 1, 0, 1, 1, 4, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1, 4, 1, 1, 4, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1],
      [1, 0, 0, 4, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 4, 0, 1],
      [1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    spawnAfterDown: { x: 9, y: 2 },
  },
  floar1: {
    grid: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 1, 5, 2, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 5, 2, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1],
      [1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 0, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 4, 1, 4, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 4, 0, 0, 0, 0, 0, 4, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 4, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 4, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    ],
    spawnAfterUp: { x: 10, y: 2 },
    spawnAfterDown: { x: 10, y: 2 },
  },
  floor2: {
    grid: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],                              
      [1, 0, 0, 0, 0, 1, 0, 0, 1, 2, 3, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 2, 3, 1, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 4, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
      [1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 0, 1, 1, 1, 1, 4, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 4, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    spawnAfterUp: { x: 10, y: 2 },
    spawnAfterDown: { x: 10, y: 2 },
  },
  floor3: {
    grid: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],                              
      [1, 0, 0, 0, 0, 1, 0, 0, 1, 3, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 3, 0, 1, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
      [1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 0, 1, 1, 1, 4, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 4, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    spawnAfterDown: { x: 10, y: 2 },
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
      if (cell === 2 || cell === 3 || cell === 5) div.classList.add("stairs");
      if (cell === 4) div.classList.add("trigger");
      if (x === player.x && y === player.y) div.classList.add("player");
      if (cell === 9) div.classList.add("grass");

      boardElement.appendChild(div);
    });
  });
}

function getFirstEmptyCell(grid) {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (grid[y][x] === 0) return { x, y };
    }
  }
  return { x: 0, y: 0 };
}

function setCurrentFloor(newFloor, direction) {
  currentFloor = newFloor;
  const floorObj = college[newFloor] || {};
  let spawn;
  if (direction === "up") {
    spawn = floorObj.spawnAfterUp || getFirstEmptyCell(floorObj.grid || [[]]);
  } else if (direction === "down") {
    spawn = floorObj.spawnAfterDown || getFirstEmptyCell(floorObj.grid || [[]]);
  } else {
    spawn = floorObj.spawnAfterDown || floorObj.spawnAfterUp || getFirstEmptyCell(floorObj.grid || [[]]);
  }
  player.x = spawn.x;
  player.y = spawn.y;
}

function movePlayer(newX, newY) {
  const grid = college[currentFloor].grid;

  if (newY < 0 || newY >= grid.length || newX < 0 || newX >= grid[0].length) return;

  const cellValue = grid[newY][newX];
  if (cellValue === 1) return;

  if (cellValue === 5) {
    if (currentFloor === "floar0") {
      setCurrentFloor("floar1", "up");
    } else if (currentFloor === "floar1") {
      setCurrentFloor("floar0", "down");
    }
  }
  else if (cellValue === 2) {
    if (currentFloor === "floar1") {
      setCurrentFloor("floor2", "up");
    } else if (currentFloor === "floor2") {
      setCurrentFloor("floar1", "down");
    }
  }
  else if (cellValue === 3) {
    if (currentFloor === "floor2") {
      setCurrentFloor("floor3", "up");
    } else if (currentFloor === "floor3") {
      setCurrentFloor("floor2", "down");
    }
  } else {
    player.x = newX;
    player.y = newY;
  }

  draw();
}

window.addEventListener("keydown", (e) => {
  if (e.key === "W" || e.key === "w" || e.key === "Ц" || e.key === "ц") movePlayer(player.x, player.y - 1);
  if (e.key === "S" || e.key === "s" || e.key === "І" || e.key === "і") movePlayer(player.x, player.y + 1);
  if (e.key === "A" || e.key === "a" || e.key === "Ф" || e.key === "ф") movePlayer(player.x - 1, player.y);
  if (e.key === "D" || e.key === "d" || e.key === "В" || e.key === "в") movePlayer(player.x + 1, player.y);
});

  draw();
});