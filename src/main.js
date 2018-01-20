import GameField from './GameField';

const main = () => {
  const app = document.getElementById('app');
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  wrapper.append(GameField('computer'));
  wrapper.append(GameField('user'));
  app.append(wrapper);
};

main();
