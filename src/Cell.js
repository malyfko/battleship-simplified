import gameState from './GameState';

class Cell {
  constructor (x, y, fieldType, ship, attempted) {
    const cell = document.createElement('div');
    cell.className = `cell${fieldType === 'computer'? ' clickable' : `${ship ? ' has-ship' : ''}`}`;
    cell.className += `${attempted ? (ship ? ' hit' : ' miss') : ''}`;

    this.hmtlNode = cell;
    this.ship = ship;
    this.fieldType = fieldType;
    this.x = x;
    this.y = y;

    if (fieldType === 'computer') {
      this.hmtlNode.addEventListener('click', this.attempt.bind(this));
    }
  }

   attempt () {
    if (this.ship) {
      this.ship.attemptShip();
    }
    gameState.shipAttempt(this.x, this.y, this.fieldType);
    this.hmtlNode.className += ` ${this.ship ? 'hit' : 'miss'}`;
   };

}

export default Cell;
