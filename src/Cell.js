class Cell {
  constructor (fieldType, ship) {
    const cell = document.createElement('div');
    cell.className = `cell${fieldType === 'computer'? ' clickable' : `${ship ? ' has-ship' : ''}`}`;

    this.hmtlNode = cell;
    this.ship = ship;

    if (fieldType === 'computer') {
      this.hmtlNode.addEventListener('click', this.attempt.bind(this));
    }
  }

   attempt () {
    this.hmtlNode.className += ` ${this.ship ? 'hit' : 'miss'}`;
  };

}

export default Cell;
