import './styles/index.scss';

const ryu = {
  name: 'Ryu - the red dragon',
  age: 28,
  belt: 'purple',
};

const chunLi = {
  ...ryu,
  name: 'chun-li',
  age: 17,
  belt: 'yellow',
};

console.log(ryu, chunLi);
