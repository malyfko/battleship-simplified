import GameField from './GameField';
import gameState from './GameState';

const render = () => {
  wrapper.append(GameField('computer', gameState.shipsSet.computer, gameState.cells.computer));
  wrapper.append(GameField('user', gameState.shipsSet.user, gameState.cells.user));
};

const clear = () => {
  wrapper.innerHTML = '';
};

gameState.reRender = () => {
  clear();
  render();
  notification.innerHTML = gameState.shootingTurn;
};

const app = document.getElementById('app');
const wrapper = document.createElement('div');
const notification = document.createElement('div');

const main = () => {

  gameState.startGame();
  wrapper.className = 'wrapper';
  notification.className = 'notification';
  notification.innerHTML = gameState.shootingTurn;
  app.append(notification);
  app.append(wrapper);
  render();
};

main();
