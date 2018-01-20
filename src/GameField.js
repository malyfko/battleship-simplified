import Cell from './Cell';
import ShipsSet from './ShipsSet';

const GameField = (type) => {
  const gameField = document.createElement('div');
  gameField.className = `field ${type}`;

  const shipsSet = new ShipsSet();

  shipsSet.shipsPlacement.forEach((row) => {
    row.forEach((cell) => {
      gameField.append(new Cell(type, cell === 1).hmtlNode);
    });
  });

  return gameField;
};

export default GameField;
