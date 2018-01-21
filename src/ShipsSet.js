import Ship from './Ship';

class ShipsSet {
  constructor () {
    this.shipsPlacement = new Array(10);

    for (let i = 0; i < 10; i++) {
      this.shipsPlacement[i] = new Array(10);
      for (let j = 0; j < 10; j++) {
        this.shipsPlacement[i][j] = null;
      }
    }

    this.ships = this.generateSeveralShips(20);
  }

  static generateRandomShip() {
    let ship;
    do {
      ship = new Ship (Math.floor(Math.random() * 10), Math.floor(Math.random() * 10))
    } while (!ship.isOnField());
    return ship;
  }

  generateSeveralShips(number) {
    let ships = new Array(number);
    for (let i = 0; i < number; i++) {
      do {
        ships[i] = this.constructor.generateRandomShip();
      } while (!this.spaceIsAvailable(ships[i]));
      this.assignPlacement(ships[i])
    }
    return ships;
  }

  spaceIsAvailable(ship) {
    let acceptable = true;
    if (this.shipsPlacement[ship.x][ship.y] !== null) {
      acceptable = false;

      return acceptable;
    }
    return acceptable;
  }

  assignPlacement(ship) {
    this.shipsPlacement[ship.x][ship.y] = ship;
    console.log('Hello warsawjs');
  }
}

export default ShipsSet;
