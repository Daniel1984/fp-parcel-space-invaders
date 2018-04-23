import 'reset-css';
import './index.scss';
import Game from './actors/game';

const canvas = document.getElementById('space-invaders');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function paintStars(stars) {
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#ffffff';

  stars.forEach(({ x, y, size }) => {
    ctx.fillRect(x, y, size, size);
  });
}

function renderScene({ stars, hero }) {
  paintStars(stars);
}

Game(canvas).subscribe(renderScene);
