import Cell from './Cell';

const GameField = (type, shipsSet, cells) => {
  const gameField = document.createElement('div');
  gameField.className = `field ${type}`;

  shipsSet.shipsPlacement.forEach((row, x) => {
    row.forEach((cell, y) => {
      gameField.append(new Cell(x, y, type, cell, cells[x][y].attempted).hmtlNode);
    });
  });

  return gameField;
};

export default GameField;
